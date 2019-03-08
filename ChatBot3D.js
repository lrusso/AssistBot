window.onload = function()
	{
	var threeCanvas = document.getElementById("threeCanvas");
	document.getElementById("threeCanvas").height = window.innerHeight;
	document.getElementById("threeCanvas").width = window.innerWidth * 0.40;
	document.getElementById("ChatBot").style.left = document.getElementById("threeCanvas").width + "px";
	init3D();
	ChatBot_Step_1_Welcome(textWelcome);
	};

//===============================================
//  3D SIDE: THREE.JS & SEA3D
//===============================================

var camera, scene, renderer, center, clock, cam, mouse;
var eyeLeft, eyeRight;
var headMeshs = [];
var morphsTables = [];
var fullLoaded = false;
var headBone;
var headBoneRef;
var eyes, eyesTarget;
var body, suit, bodyNeck;

var bestMaterial = [];
var lowMaterial = [];

var lights = [];

function init3D()
	{
	clock = new THREE.Clock();

	cam = { horizontal:95, vertical:85, distance:15 };
	mouse = { ox:0, oy:0, h:0, v:0, mx:0, my:0, dx:0, dy:0, down:false, over:false, moving:true };

	renderer = new THREE.WebGLRenderer({ canvas:threeCanvas});
	renderer.setSize( document.getElementById("threeCanvas").width, document.getElementById("threeCanvas").height, true );
	renderer.autoClear = false;

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 50, document.getElementById("threeCanvas").width/document.getElementById("threeCanvas").height, 0.5, 10000 );

	window.addEventListener( "resize", resize, false );

	loop();
	loadSea3d();
	}

function loop()
	{
	requestAnimationFrame(loop,renderer.domElement);
	updateAnimation();
	renderer.render(scene,camera);
	}

function resize()
	{
	document.getElementById("threeCanvas").height = window.innerHeight;
	document.getElementById("threeCanvas").width = window.innerWidth * 0.40;
	document.getElementById("ChatBot").style.left = document.getElementById("threeCanvas").width + "px";

	camera.aspect = document.getElementById("threeCanvas").width/document.getElementById("threeCanvas").height;
	camera.updateProjectionMatrix();
	renderer.setSize(document.getElementById("threeCanvas").width,document.getElementById("threeCanvas").height, true);
	}

function loadSea3d()
	{
	var size = 1;
	var loader = new THREE.SEA3D( true );
	loader.onComplete = function( e )
		{
		var m, mat, oldmat;
		var i = loader.meshes.length;

		while(i--)
			{
			m = loader.meshes[i];
			oldmat = m.material;
			bestMaterial[i] = oldmat;
			lowMaterial[i] = new THREE.MeshBasicMaterial({map:oldmat.map,transparent:oldmat.transparent, opacity:oldmat.opacity, skinning:oldmat.skinning, morphTargets:oldmat.morphTargets, side:oldmat.side }); 
			
			m.material = lowMaterial[i];
			
			if(m.name == "eyeL_lo" || m.name == "cils" || m.name == "hair" || m.name == "teethUpper" || m.name == "teethLower" ) m.material.transparent = true;
			if(m.name == "necklace" ) m.material.color.setHex(0x2e3032);
			if(m.name == "bodyLow2" ) m.visible = false;
			headMeshs[i] = m;
			}

		m = headMeshs[0];
		m.setWeight("neck", 0);
		m.setWeight("earOut", 0.6);
		m.scale.set(size,size,-size);
		m.stop();
		scene.add(m);

		eyes = new THREE.Object3D();
		eyesTarget = new THREE.Object3D();
		headBone = m.skeleton.bones[1];
		eyes.matrix = headBone.skinMatrix;
		eyes.matrixAutoUpdate = false;
		m.add(eyes);
		headBone.rotation.y = -15*ToRad;

		headBoneRef = headBone.rotation.clone();

		var eyeGeo = new THREE.SphereGeometry(0.64,30,28);
		var eyeMap = gradTexture([[0.5,0.15,0.12,0.07, 0.02], ["#ff6060","#ffffff","#5599ff","#4488ff", "#000000"]]);
		var eyeMat = new THREE.MeshBasicMaterial({ map:eyeMap });

		eyeGeo.applyMatrix(new THREE.Matrix4().makeRotationX(-90*ToRad));
		eyeLeft  = new THREE.Mesh( eyeGeo, eyeMat);
		eyeRight = new THREE.Mesh( eyeGeo, eyeMat);
		eyeLeft.scale.set(1,1,-1);
		eyeRight.scale.set(1,1,-1);
		eyeLeft.position.set(3.82, -1.162, 2.92);
		eyeRight.position.set(3.82, 1.162, 2.92);
		eyesTarget.position.set(3.82, 0, 10);
		eyes.add( eyeLeft );
		eyes.add( eyeRight );
		eyes.add( eyesTarget );

		center = new THREE.Vector3();
		center.y = 40.5+((100-cam.distance)/3.5);
		moveCamera();
		
		var mName;
		for (var j=0; j < m.geometry.morphTargets.length; j++)
			{
			mName = m.geometry.morphTargets[j].name;
			morphsTables[mName] =
				{
				teethLower:testMorph(headMeshs[2],mName),
				sock:testMorph(headMeshs[1],mName),
				eye:testMorph(headMeshs[6],mName),
				tongue:testMorph(headMeshs[7],mName),
				cils:testMorph(headMeshs[5],mName),
				}
			}

		loadSea3dBody();
		}

	loader.parser = THREE.SEA3D.DEFAULT;
	loader.load("ChatBot3D");
	}

function loadSea3dBody()
	{
	fullLoaded = true;
	}

function testMorph(m, name)
	{
	var result = false;
	for (var j=0; j < m.geometry.morphTargets.length; j++)
		{
		if(m.geometry.morphTargets[j].name == name) result = true;
		}
	return result;
	}

function fullMorph( name , value)
	{
	if(!morphsTables[name])return;
	headMeshs[0].setWeight(name, value);
	if( morphsTables[name].teethLower ) headMeshs[2].setWeight(name, value);
	if( morphsTables[name].sock ) headMeshs[1].setWeight(name, value);
	if( morphsTables[name].eye ) headMeshs[6].setWeight(name, value);
	if( morphsTables[name].tongue ) headMeshs[7].setWeight(name, value);
	if( morphsTables[name].cils ) headMeshs[5].setWeight(name, value);
	}

//===============================================
//  ANIMATION
//===============================================

var count = [0,0,0];
var phonemesSequency = [];
var startSequence = false;
var finalSequence = false;
var currentWord = "";
var prevWord = "";
var currentNum = 0;
var changeExpression = false;
var currentExpression = 0;
var newExpression = 0;
var morphExpressions = ["expression", "anger","sad", "disgust", "fear", "surprise", "smileClose", "smileOpen"];

function updateAnimation()
	{
	if(fullLoaded)
		{
		var delta = clock.getDelta();
		THREE.AnimationHandler.update( delta*0.5 );

		count[0]++;
		if(count[0]<=10)blinkEyes(count[0]);
		else if(count[0]<=20)blinkEyes(20-count[0]);
		else if(count[0] == 200)count[0]=0;

		if(startSequence)
			{
			count[1]++;
			if(count[1]<=5)
				{
				sayWord(count[1]);
				}
			else if(count[1]==6)
				{
				count[1]=0;
				if(finalSequence==true)
					{
					startSequence=false;
					}
				prevWord = phonemesSequency[currentNum];
				currentNum++;
				if(currentNum < phonemesSequency.length) currentWord = phonemesSequency[currentNum];
				else finalSequence = true;
				}
			}
		}
	}

function blinkEyes(N)
	{
	var n = N*0.1;
	headMeshs[0].setWeight("blinkLeft", n);
	headMeshs[0].setWeight("blinkRight", n);
	headMeshs[5].setWeight("blinkLeft", n);
	headMeshs[5].setWeight("blinkRight", n);
	}

function switchExpression(N)
	{
	var n = N*0.02;
	if(newExpression!==0)fullMorph(morphExpressions[newExpression], n);
	fullMorph(morphExpressions[currentExpression], 1-n);
	}

function expression()
	{
	changeExpression = true;
	newExpression++;
	if(newExpression == morphExpressions.length) newExpression =0;
	exp.value = morphExpressions[newExpression];
	}

function saySequence()
	{
	startSequence = true;
	finalSequence = false;
	currentNum = 0
	currentWord = phonemesSequency[currentNum];
	prevWord="";
	}

function sayWord(N)
	{
	var n = N*0.2;
	if(currentWord!=="")fullMorph(phonemeNumber(currentWord), n);
	if(prevWord!=="")fullMorph(phonemeNumber(prevWord), 1-n);
	}

//===============================================
//  PHONEME TO MORPH
//===============================================

function phonemeNumber(Value)
	{
	var t;
	switch ( Value )
		{
		case 0 : t = "";       break;
		case 1 : t = "aah";    break;
		case 2 : t = "bigaah"; break;
		case 3 : t = "ch.j.sh";break;
		case 4 : t = "f.v";    break;
		case 5 : t = "i";      break;
		case 6 : t = "k";      break;
		case 7 : t = "ee";     break;
		case 8 : t = "b.m.p";  break;
		case 9 : t = "n";      break;
		case 10: t = "oh";     break;
		case 11: t = "r";      break;
		case 12: t = "d.s.t";  break;
		case 13: t = "th";     break;
		case 14: t = "w";      break;
		case 15: t = "eh";     break;
		case 16: t = "ooh.q";  break;
		}
	return t;
	}

function convert(n)
	{
	phonemesSequency.push(1);
	}

//===============================================
//  MATH
//===============================================

var ToRad = Math.PI / 180;
function Orbit(origine, horizontal, vertical, distance)
	{
	var p = new THREE.Vector3();
	var phi = vertical*ToRad;
	var theta = horizontal*ToRad;
	p.x = (distance * Math.sin(phi) * Math.cos(theta)) + origine.x;
	p.z = (distance * Math.sin(phi) * Math.sin(theta)) + origine.z;
	p.y = (distance * Math.cos(phi)) + origine.y;
	return p;
	}

//===============================================
//  MOUSE & NAVIGATION
//===============================================

function moveCamera()
	{
	camera.position.copy(Orbit(center, cam.horizontal, cam.vertical, cam.distance));
	camera.lookAt(center);
	}

function onMouseMove(e)
	{
	e.preventDefault();
	var px, py;
	if(e.touches)
		{
		px = e.clientX || e.touches[ 0 ].pageX;
		py = e.clientY || e.touches[ 0 ].pageY;
		}
		else
		{
		px = e.clientX;
		py = e.clientY;
		}

	if (mouse.down)
		{
		document.body.style.cursor = "move";
		cam.horizontal = ((px - mouse.ox) * 0.3) + mouse.h;
		cam.vertical = (-(py - mouse.oy) * 0.3) + mouse.v;
		moveCamera();
		}
	else if(fullLoaded)
		{
		mouse.dx = -(px - window.innerWidth*0.5)*0.1;
		mouse.dy = -(py - window.innerHeight*0.5)*0.1;
		headBone.rotation.set(headBoneRef.x+(((mouse.dx*0.5))*ToRad), headBoneRef.y+(((mouse.dy*0.5)+10)*ToRad), headBoneRef.z);

		eyesTarget.position.set(3.82+(mouse.dy*0.15), (-mouse.dx*0.15), 10);
		var midL = eyesTarget.position.clone();
		var midR = midL.clone();
		eyeLeft.lookAt(midL.add(new THREE.Vector3(0,-2,0)));
		eyeRight.lookAt(midR.add(new THREE.Vector3(0,2,0)));
		}
	}

//===============================================
//  AUTO TEXTURE
//===============================================

function gradTexture(color)
	{
	var c = document.createElement("canvas");
	var ct = c.getContext("2d");
	c.width = 16; c.height = 256;
	var gradient = ct.createLinearGradient(0,0,0,256);
	var i = color[0].length;
	while(i--){ gradient.addColorStop(color[0][i],color[1][i]); }
	ct.fillStyle = gradient;
	ct.fillRect(0,0,16,256);
	var texture = new THREE.Texture(c);
	texture.needsUpdate = true;
	return texture;
	}

var textToSpeech = window.speechSynthesis;

function speak(a)
	{
	var utterThis = new SpeechSynthesisUtterance(a);
	utterThis.lang = "es-MX";

	textToSpeech.speak(utterThis);

	utterThis.onstart = function (event)
		{
		for (var i = 0; i < a.length * 0.3; i++)
			{
			if (i==0)
				{
				phonemesSequency = [];
				}

			phonemesSequency.push(1);
			startSequence = true;
			finalSequence = false;
			currentNum = 0
			prevWord="";

			phonemesSequency.push(0);
			startSequence = true;
			finalSequence = false;
			currentNum = 0
			prevWord="";
			}
		};
	}