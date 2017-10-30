const { Command } = require('discord.js-commando')
const request = require('request')
const Discord = require('discord.js')

module.exports = class XkcdCommand extends Command {
    constructor (client) {
        super (client, {
            name: 'xkcd',
            group: 'misc',
            memberName: 'xkcd',
            description: 'xkcd stuff'
        })
    }
    run (message) {
        request('https://xkcd.com/info.0.json', function (err, response, body) {
            var embed = new Discord.RichEmbed();
            var content = JSON.parse(body);
            embed.title = content.title + ' (' + content.num + ')';
            embed.image = {url:content.img};
            embed.description = content.alt;
            embed.url = 'https://www.xkcd.com/' + content.num + '/'
            return message.channel.send(embed);
        }) 
    }
}
