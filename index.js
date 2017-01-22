const express = require('express');
const fetch = require('node-fetch');
const app = express();

fetch('https://motd.today/data.json').then(
    function (response) {
        return response.json();
    }
).then(function (body) {
    console.log('Name: ' + body.motds[0].name);
    console.log('Description: ' + body.motds[0].description);
    console.log('Number of player on each team: ' + body.motds[0].teamSize);
    console.log('Game mode: ' + body.motds[0].gameMode);
});

