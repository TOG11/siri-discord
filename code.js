var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const fs = require('fs')
const { Client, Intents } = require('discord.js');


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
});


app.use(bodyParser.urlencoded({extended: false}));

app.post("/sms", function (request, response) {
    
 var message = request.body.Body
 client.channels.fetch('CHANNEL ID HERE')
 .then(channel => {
     channel.send(message);

     function myFunc(arg) {
        client.destroy()
        client.channels.fetch()
      }
      setTimeout(myFunc, 1500, 'funky');

     
 })
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

client.login('DISCORD TOKEN HERE')