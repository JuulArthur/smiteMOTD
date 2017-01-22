const fetch = require('node-fetch');
const postmark = require('postmark');
const apiKey = process.env.POSTMARK_API_KEY;
const client = new postmark.Client(apiKey);

fetch('https://motd.today/data.json').then(
    function (response) {
        return response.json();
    }
).then(function (body) {
    console.log('Name: ' + body.motds[0].name);
    console.log('Description: ' + body.motds[0].description);
    console.log('Number of player on each team: ' + body.motds[0].teamSize);
    console.log('Game mode: ' + body.motds[0].gameMode);
    const mailBody = 'Hello fellow god, here is the latest news!\n\n' + 'Name: ' + body.motds[0].name + '\n' + 'Description: ' + body.motds[0].description + '\n' + 'Number of player on each team: ' + body.motds[0].teamSize + '\n' + 'Game mode: ' + body.motds[0].gameMode;
    client.sendEmail({
        "From": "juul@rudihagen.me",
        "To": "juularthur92@gmail.com",
        "Subject": "Smite MOTD",
        "TextBody": mailBody
    });
});

