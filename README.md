# AssistBot - JavaScript Chatbot Assistant for Websites

![alt screen](https://raw.githubusercontent.com/lrusso/AssistBot/master/AssistBot.png)

## Bot samples

| #  | BOT URL  | BOT DETAILS |
| :------------: |:---------------:| :-----|
| 1 | https://lrusso.github.io/AssistBot/AssistBotSample1.htm | Web receptionist.
| 2 | https://lrusso.github.io/AssistBot/AssistBotSample2.htm | Hotel receptionist.
| 3 | https://lrusso.github.io/AssistBot/AssistBotSample3.htm | Tech Support receptionist.
| 4 | https://lrusso.github.io/AssistBot/AssistBotSample4.htm | 3D Talking Bot Web receptionist.

## Sending the data

There are two methods for posting data in the samples:

- First method: Standard XMLHttpRequest.
- Second method: Creating an image variable, setting in the src value a server URL where all the parameters are sent by GET and the answer of the server must be an image in order to get a valid reply from the bot. This method is useful if you want to avoid the CORS limitation that may exists between servers.

## Receiving the data

There is a ChatBot.php file sample in this repository that shows how the data may be received.

## Based on BotUI with several bugfixes and updates

| TYPE  | ELEMENT  | DETAILS |
| :------------: |:---------------:| :-----|
| Fixed | BotUI Core | Prevents from inputting HTML content.
| Fixed | BotUI Core | Prevents from automatically showing the response of an action button.
| Fixed | BotUI Style | Bugfixed when inputting a blank space.
| Fixed | BotUI Style | Bugfixed that the icons inherits the box-sizing property.
| Fixed | BotUI Style | Bugfixed that the input box inherits the box-sizing property.
| Fixed | BotUI Style | Bugfixed that the messages inherits the box-sizing property.
| Fixed | BotUI Style | Bugfixed that the loading dots inherits the box-sizing property.
| Updated | BotUI Core | Scroll to bottom when new content.
| Updated | BotUI Core | Agent and Human icons are loaded from the CSS file.
| Updated | BotUI Core | Send button by default and with a different CSS class.
| Updated | Bot Samples | Looping checkings for inputted data.
| Updated | Bot Samples | Implemented scrolling chatbot window.
| Updated | Bot Samples | Implemented close button in the chatbot window.
