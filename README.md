# siri-discord 1.2.5

# Geting Started

First off you need to make a Twilio Account, to do so make one [HERE](https://www.twilio.com/try-twilio) (Dont worry about the free trial!)

On the Left-hand side of the Twilio console click  Phone Numbers > Manage > Active Numbers 
Here you will create your phone number that Siri will text. It doesnt matter what number you pick.

Once you've got a phone number from Twilio download the following (if not already downloaded)

[NGROK](https://ngrok.com/)

[VSCODE](https://code.visualstudio.com/)

[NODE.JS](https://nodejs.org/en/)

Once these are installed create a new directory on your computer.
inside that directory create a index.js file.</P>
in the project directory bar type "cmd", this will open a terminal.

in that terminal type "**npm init -y**", after that is done type in "**npm i discord.js**", "**npm i body-parser**", "**npm i express**"

then open the index.js in Vscode, and paste the code from code.js into it.

Then head to https://discord.com/developers/applications and create a new application, once done head down to bot and click create.

(to invite this bot to your server go to general information and copy the application id, and paste it into [HERE](https://disbotgen.zaytunhub.com/) with Read Message on and Send Message on.)

then copy the bots token and put it into the bottom of the script in index.js

then go into the server the bots in and copy the channel id you want Siri to send the messages to.

(if you cant see copy channel id then go into settings > advanced > developer mode set it to on)

then put the channel id into the client.channels.fetch('CHANNEL ID HERE')

then open ngrok.exe and type ngrok http 3000 then copy the forwarding URL and go into Twilio and go to the phone number you have and scroll down and go to Messaging and set the Message Comes In to webhook and paste the NGROK url and at the end of the URL add /sms and save

open the project terminal and do **node index.js** and once the project starts hit uparrow and enter (on the keyboard) and keep doing it, however much times you do this is however much times you can send a message.
