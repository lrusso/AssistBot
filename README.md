# Chatbot Assistant for Websites

Chatbot that asks the user information, validates the data, sends it to a server and checks that the data got into the server. This bot is also compatible with mobile devices.

![alt screen](https://raw.githubusercontent.com/lrusso/assistbot/master/ChatBot.png)


## Sending the data

There are two methods for posting data in the demo:

- First method: Standard XMLHttpRequest.
- Second method: Creating an image variable, setting in the src value a server URL where all the parameters are sent by GET and the answer of the server must be an image in order to get a valid reply from the bot. This method is useful if you want to avoid the CORS limitation that may exists between servers.

## Receiving the data

There is a ChatBot.php file sample in this repository that shows how the data may be received.

## Bot samples:

| #  | BOT URL  | BOT DETAILS |
| :------------: |:---------------:| :-----|
| 1 | https://lrusso.github.io/assistbot/ChatBotSample1.htm | Asking and sending user information.
| 2 | https://lrusso.github.io/assistbot/ChatBotSample2.htm | Hotel receptionist.
| 3 | https://lrusso.github.io/assistbot/ChatBotSample3.htm | Technical Support.

## Based on BotUI with a few updates:

| UPDATE  | ELEMENT  | DETAILS |
| :------------: |:---------------:| :-----|
| 1 | BotUI Core | Scroll to bottom when new content.
| 2 | BotUI Core | Prevents from inputting HTML content.
| 3 | BotUI Core | Prevents from automatically showing the response of an action button.
| 4 | BotUI Core | Agent and Human icons are loaded from the CSS file.
| 5 | BotUI Style | Bugfixed when inputting a blank space.
| 6 | BotUI Style | Bugfixed that the icons inherits the box-sizing property.
| 7 | BotUI Style | Bugfixed that the input box inherits the box-sizing property.
| 8 | BotUI Style | Bugfixed that the messages inherits the box-sizing property.
| 9 | BotUI Style | Bugfixed that the loading dots inherits the box-sizing property.
| 10 | Demo Script | Looping checkings for inputted data.
| 11 | Demo Script | Implemented scrolling chatbot window.
| 12 | Demo Script | Implemented close button in the chatbot window.
