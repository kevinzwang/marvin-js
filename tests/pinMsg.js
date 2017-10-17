const Discord = require('discord.js');
const client = new Discord.Client();
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

.on('messageReactionAdd', (reaction, user) => {
    if (reaction.emoji.name == '📌') {
        reaction.message.pin();
    }
})

.on('messageReactionRemove', (reaction, user) => {
    if (reaction.emoji.name = '📌') {
        reaction.message.unpin();
    }
})

client.login(token);