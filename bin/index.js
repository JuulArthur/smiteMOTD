const fetch = require('node-fetch');
const postmark = require('postmark');
const apiKey = process.env.POSTMARK_API_KEY;
const client = new postmark.Client(apiKey);

fetch('https://motd.today/data.json').then(
    function (response) {
        return response.json();
    }
).then(function (body) {
    const mailBody = 'Hello fellow god, here is the latest news about MOTD in Smite!\n\n' + 'Name: ' + body.motds[0].name + '\n' + 'Description: ' + body.motds[0].description + '\n' + 'Number of player on each team: ' + body.motds[0].teamSize + '\n' + 'Game mode: ' + body.motds[0].gameMode;
    client.sendEmail({
        "From": "juul@rudihagen.me",
        "To": "juularthur92@gmail.com",
        "Subject": "Smite MOTD",
        "TextBody": mailBody
    });
    client.sendEmail({
        "From": "juul@rudihagen.me",
        "To": "JWintersto@gmail.com",
        "Subject": "Smite MOTD",
        "TextBody": mailBody
    });
});

