const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzMzMjk3NDQyODg5OTI0NjA4.DEKnBw.oK1cPmNQf7qKHjXdApFwRCWdpew';

client.on('ready', () => {
    console.log(
        '----------\n' +
        `Success! ${client.user.username} is connected!\n` +
        `ID: ${client.user.id}\n` +
        `TIME: ${(new Date())}\n` +
        '----------'
    );
})

.on('messageReactionAdd', (reaction, user) => {
    if (reaction.emoji.name == 'pushpin') {
        reaction.message.pin();
    }
})

.on('messageReactionRemove', (reaction, user) => {
    if (reaction.emoji.name = 'pushpin') {
        reaction.message.unpin();
    }
})

client.l