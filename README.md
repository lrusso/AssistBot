# AssistBot - JavaScript Chatbot Assistant for Websites

![alt screen](https://raw.githubusercontent.com/lrusso/assistbot/master/ChatBot.png)

## Bot samples:

| #  | BOT URL  | BOT DETAILS |
| :------------: |:---------------:| :-----|
| 1 | https://lrusso.github.io/assistbot/ChatBotSample1.htm | Web receptionist.
| 2 | https://lrusso.github.io/assistbot/ChatBotSample2.htm | Hotel receptionist.
| 3 | https://lrusso.github.io/assistbot/ChatBotSample3.htm | Tech Support receptionist.
| 4 | https://lrusso.github.io/assistbot/ChatBotSample4.htm | 3D Talking Bot Web receptionist.

## Sending the data

There are two methods for posting data in the samples:

- First method: Standard XMLHttpRequest.
- Second method: Creating an image variable, setting in the src value a server URL where all the parameters are sent by GET and the answer of the server must be an image in order to get a valid reply from the bot. This method is useful if you want to avoid the CORS limitation that may exists between servers.

## Receiving the data

There is a ChatBot.php file sample in this repository that shows how the data may be received.

## Based on BotUI with a few updates:

| UPDATE  | ELEMENT  | DETAILS |
| :------------: |:---------------:| :-----|
| 1 | BotUI Core | Scroll to bottom when new content.
| 2 | BotUI Core | Prevents from inputting HTML content.
| 3 | BotUI Core | Prevents from automatically showing the response of an action button.
| 4 | BotUI Core | Agent and Human icons are loaded from the CSS file.
| 5 | BotUI Core | Send button by default and with a different CSS class.
| 6 | BotUI Style | Bugfixed when inputting a blank space.
| 7 | BotUI Style | Bugfixed that the icons inherits the box-sizing property.
| 8 | BotUI Style | Bugfixed that the input box inherits the box-sizing property.
| 9 | BotUI Style | Bugfixed that the messages inherits the box-sizing property.
| 10 | BotUI Style | Bugfixed that the loading dots inherits the box-sizing property.
| 11 | Bot Samples | Looping checkings for inputted data.
| 12 | Bot Samples | Implemented scrolling chatbot window.
| 13 | Bot Samples | Implemented close button in the chatbot window.
