# AssistBot - JavaScript Bot Assistant for Websites

![alt screen](https://raw.githubusercontent.com/lrusso/AssistBot/master/AssistBot.png)

## Bot samples

|  BOT URL  | BOT DETAILS |
| :---------------:| :-----|
| https://lrusso.github.io/AssistBot/AssistBotSample1.htm | Web receptionist.
| https://lrusso.github.io/AssistBot/AssistBotSample2.htm | Hotel receptionist.
| https://lrusso.github.io/AssistBot/AssistBotSample3.htm | Hospital receptionist.
| https://lrusso.github.io/AssistBot/AssistBotSample4.htm | Tech Support receptionist.
| https://lrusso.github.io/AssistBot/AssistBotSample5.htm | 3D Talking Bot Web receptionist.

## Bots working in time ranges and time zones

Is possible to set a working time range for the bots. The window dialog with the bot will only appear within that time range. If you don't want this just set the bot to work from 0 to 23.

```
var workingFrom = 9;
var workingTo = 18;
var workingTimeZone = "-3"; // EXAMPLE TIME ZONE
```
## Time zone values

https://lrusso.github.io/AssistBot/TimeZoneTest.htm

## Sending the data to a server

There are two methods for posting data in the samples:

- First method: Standard XMLHttpRequest.
- Second method: Creating an image variable, setting in the src value a server URL where all the parameters are sent by GET and the answer of the server must be an image in order to get a valid reply from the bot. This method is useful if you want to avoid the CORS limitation that may exists between servers.

## Receiving the data from the server

There is a AssistBot.php file sample in this repository that shows how the data may be received.

## Based on BotUI with several bugfixes and updates

| TYPE  | ELEMENT  | DETAILS |
| :------------: |:---------------:| :-----|
| Fixed | BotUI Core | Prevents from inputting HTML content.
| Fixed | BotUI Core | Prevents from automatically showing the response of an action button.
| Fixed | BotUI Style | Bugfix when inputting a blank space.
| Fixed | BotUI Style | Bugfix where the messages were misplaced by 2 pixels.
| Fixed | BotUI Style | Bugfix where the icons inherits the box-sizing property.
| Fixed | BotUI Style | Bugfix where the input box inherits the box-sizing property.
| Fixed | BotUI Style | Bugfix where the messages inherits the box-sizing property.
| Fixed | BotUI Style | Bugfix where the loading dots inherits the box-sizing property.
| Updated | BotUI Core | Scroll to bottom when new content.
| Updated | BotUI Core | Agent and Human icons are loaded from the CSS file.
| Updated | BotUI Core | Send button by default and with a different CSS class.
| Updated | Bot Samples | Looping checkings for inputted data.
| Updated | Bot Samples | Implemented scrolling chatbot window.
| Updated | Bot Samples | Implemented close button in the chatbot window.
