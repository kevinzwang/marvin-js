const Commando = require('discord.js-commando');

const client = new Commando.Client({
    owner: 'your id here',
    commandPrefix: '!'
});

const path = require('path');

const token = 'your token here';

client.on('ready', () => {
    console.log(
        '----------\n' +
        `Success! ${client.user.username} is connected!\n` +
        `ID: ${client.user.id}\n` +
        `TIME: ${(new Date())}\n` +
        '----------'
    );
})

client.registry
    .registerGroup('misc', 'misc')
    .registerDefaults()

    .registerCommandsIn(path.join(__dirname, 'commands'))
   

client.login(token)
