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

.on('message', message => {
    if (message.content === 'quit') {
        client.destroy();
        process.exit();
    } else if (!message.author.bot) {
        message.reply('hi');
    }
});

client.login(token);
