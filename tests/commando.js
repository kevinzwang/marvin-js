const Commando = require('discord.js-commando');

const client = new Commando.Client({
    owner: '312418351844425731',
    commandPrefix: '!'
});

const path = require('path');

const token = 'MzMzMjk3NDQyODg5OTI0NjA4.DNFWcg.Tww7Jo0il0QZB3DxbV-IDltd3uI';

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
