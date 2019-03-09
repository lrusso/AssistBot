<?php

if ($_GET[type]!="" && $_GET[name]!="" && $_GET[email]!="" && $_GET[message]!="")
	{
	$contactMessageYear = date("Y");
	$contactMessageMonth = date("m");
	$contactMessageDayNumber = date("d");
	$contactMessageDayHour = date("H");
	$contactMessageDayMinute = date("i");
	$contactMessageDaySeconds = date("s");

	if ($contactMessageMonth=="01")			{$contactMessageMonth="Jan";}
	else if ($contactMessageMonth=="02")	{$contactMessageMonth="Feb";}
	else if ($contactMessageMonth=="03")	{$contactMessageMonth="Mar";}
	else if ($contactMessageMonth=="04")	{$contactMessageMonth="Apr";}
	else if ($contactMessageMonth=="05")	{$contactMessageMonth="May";}
	else if ($contactMessageMonth=="06")	{$contactMessageMonth="Jun";}
	else if ($contactMessageMonth=="07")	{$contactMessageMonth="Jul";}
	else if ($contactMessageMonth=="08")	{$contactMessageMonth="Aug";}
	else if ($contactMessageMonth=="09")	{$contactMessageMonth="Sep";}
	else if ($contactMessageMonth=="10")	{$contactMessageMonth="Oct";}
	else if ($contactMessageMonth=="11")	{$contactMessageMonth="Nov";}
	else if ($contactMessageMonth=="12")	{$contactMessageMonth="Dec";}

	$contactMessage = 	$contactMessageYear        . "/" .
						$contactMessageMonth       . "/" .
						$contactMessageDayNumber   . " " .
						$contactMessageDayHour     . ":" .
						$contactMessageDayMinute   . ":" .
						$contactMessageDaySeconds  . " - " .

						htmlentities($_GET[type])  . " - " .
						htmlentities($_GET[name])  . " - " .
						htmlentities($_GET[email]) . " - " .
						htmlentities($_GET[message]);

	// PUT YOUR SAVING CODE HERE FOR THE VARIABLE $contactMessage

	}

// --------------------------------------------------------------------------------------------------------
// DON'T DELETE THE LINES BELOW, IT RETURNS A 1x1 PNG IMAGE AND IS RECEIVED BY THE BROWSER AS A VALID REPLY
// --------------------------------------------------------------------------------------------------------

header("Content-type: image/png");
$data = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
echo base64_decode($data);

?>