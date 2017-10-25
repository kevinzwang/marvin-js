var request = require('request');
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
    if (message.content === 'xkcd') {
        request('https://xkcd.com/info.0.json', function (err, response, body) {
            var embed = new Discord.RichEmbed();
            var content = JSON.parse(body);
            embed.title = content.title + ' (' + content.num + ')';
            embed.image = {url:content.img};
            embed.description = content.alt;
            embed.url = 'https://www.xkcd.com/' + content.num + '/'
            message.channel.send(embed);
        })
    }
})

.on('message', message => {

})

client.login(token)
