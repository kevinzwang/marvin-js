/*
    A ping pong bot, whenever you send "ping", it replies "pong and it tells the time it took for that ping to be processed".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'your token here';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
    console.log(
        '----------\n' +
        `Success! ${client.user.username} is connected!\n` +
        `ID: ${client.user.id}\n` +
        `TIME: ${(new Date())}\n` +
        '----------'
        );
});

// Create an event listener for messages
client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'ping') {
        var d = new Date();
        var time = (d.getTime() - message.createdAt.getTime());
        // Send "pong" to the same channel
        message.reply(`pong!\nThat took ${time} milliseconds.`);
    }
});

// Log our bot in
client.login(token);