# leafbot

captures latex code and gets an image for it



conceptually very simple, also very illegal by discord tos.



actions, in order:

* check if a message sent matches \\\[$].\*\[$]\\ (basically if a message starts and ends with dollar signs and has some content in the middle)
* if message is sent in a discord channel that isnt dms with the bot and isnt in a server with the bot then:
* send the message to the texit bot
* delete the message
* forward the image and message from the bot into the original channel





