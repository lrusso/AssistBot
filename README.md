# AssistBot - Chatbots in JavaScript

![alt screen](https://raw.githubusercontent.com/lrusso/AssistBot/master/AssistBot.png)

## Bot samples

|  BOT URL  | DETAILS |
| :---------------:| :-----|
| https://lrusso.github.io/AssistBot/AssistBotSample1.htm | Web receptionist.
| https://lrusso.github.io/AssistBot/AssistBotSample2.htm | Hotel receptionist.
| https://lrusso.github.io/AssistBot/AssistBotSample3.htm | Hospital receptionist.
| https://lrusso.github.io/AssistBot/AssistBotSample4.htm | Tech Support receptionist.
| https://lrusso.github.io/AssistBot/AssistBotSample5.htm | 3D Bot Web receptionist.

## Bots working in time ranges and time zones

Is possible to set a working time range for the bots. The window dialog with the bot will only appear within that time range. If you don't want or need this feature, just set the bot to work from 0 to 23.

```javascript
var workingFrom = 9;
var workingTo = 18;
var workingTimeZone = "-3"; // EXAMPLE TIME ZONE
```
## Time zone values

https://lrusso.github.io/AssistBot/TimeZoneTest.htm

## Sending the data (client side)

There are two methods for posting data in the samples:

- First method: Standard XMLHttpRequest.
- Second method: Creating an image variable, setting in the src value a server URL where all the parameters are sent by GET and the answer of the server must be an image in order to get a valid reply from the bot. This method is useful if you want to avoid the CORS limitation that may exists between servers.

## Receiving the data (server side)

There is a AssistBot.php file in this repository with a sample logic.

## Based on BotUI 

https://github.com/botui/botui **(Version 0.3.8)**

## Bugfixes and updates

| TYPE  | ELEMENT  | DETAILS |
| :------------: |:---------------:| :-----|
| Fixed | Core | Prevents from inputting HTML content.
| Fixed | Core | Prevents from automatically showing a response.
| Fixed | Style | Bugfix when inputting a blank space.
| Fixed | Style | Bugfix where the messages were misplaced by 2 pixels.
| Fixed | Style | Bugfix where the icons inherits the box-sizing property.
| Fixed | Style | Bugfix where the input box inherits the box-sizing property.
| Fixed | Style | Bugfix where the messages inherits the box-sizing property.
| Fixed | Style | Bugfix where the three dots inherits the box-sizing property.
| Updated | Core | Scroll to bottom when new content.
| Updated | Core | Agent and Human icons are loaded from the CSS file.
| Updated | Core | Send button by default and with a different CSS class.
| Updated | Samples | Looping checkings for inputted data.
| Updated | Samples | Implemented scrolling chatbot window.
| Updated | Samples | Implemented close button in the chatbot window.
