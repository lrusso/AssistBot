# Chatbot Assistant for Websites

Chabot that asks the user information, valides the data, sends it to a server and checks that the data got into the server. This bot is also compatible with mobile devices.

## Posting the data

There are two code samples in the demo:

- First method: Standard XMLHttpRequest.
- Second method: Creating an image variable, setting in the src value a server url where all the parameters are sent by GET and the answer of the server must be an image in order to get a valid reply from the bot.

## Demo:

https://lrusso.github.io/assistbot/ChatBot.htm

## Based on BotUI with a few modifications:

| UPDATE  | ELEMENT  | DETAILS |
| :------------: |:---------------:| :-----|
| 1 | BotUI Core | Scroll to bottom when new content.
| 2 | BotUI Core | Prevents from inputting HTML content.
| 3 | BotUI Style | Bugfixed when inputting a blank space.
| 4 | Demo Script | Looping checkings for inputted data.
| 5 | Demo Script | Implemented minimize chatbot window.
