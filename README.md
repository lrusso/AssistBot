# Chatbot Assistant for Websites

Chabot that asks the user information, valides the data, sends it to a server and checks that the data got into the server. This bot is also compatible with mobile devices.

![alt screen](https://raw.githubusercontent.com/lrusso/assistbot/master/ChatBot.png)


## Sending the data

There are two code samples for posting data in the demo:

- First method: Standard XMLHttpRequest.
- Second method: Creating an image variable, setting in the src value a server URL where all the parameters are sent by GET and the answer of the server must be an image in order to get a valid reply from the bot. This method is useful if you want to avoid the CORS limitation that may exists between servers.

## Receiving the data

There is a ChatBot.php file sample in this repository that shows how the data may be received.

## Demo:

https://lrusso.github.io/assistbot/ChatBot.htm

## Based on BotUI with a few updates:

| UPDATE  | ELEMENT  | DETAILS |
| :------------: |:---------------:| :-----|
| 1 | BotUI Core | Scroll to bottom when new content.
| 2 | BotUI Core | Prevents from inputting HTML content.
| 3 | BotUI Style | Bugfixed when inputting a blank space.
| 4 | Demo Script | Looping checkings for inputted data.
| 5 | Demo Script | Implemented minimize chatbot window.
