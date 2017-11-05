const Commando = require('discord.js-commando')
const request = require('request')

module.exports = class XkcdCommand extends Commando.Command {
    constructor (client) {
        super (client, {
            name: 'xkcd',
            group: 'fun',
            memberName: 'xkcd',
            description: 'Displays an xkcd comic.',
            examples: [
               'xkcd',
               'xkcd irc',
               'xkcd 1782',
               'xkcd random'
            ]
        })
    }
    run (msg, args) {
        var url = 'https://xkcd.com/info.0.json'
        request({
            url: url, 
            json: true
        }, function (err, resp, body) {
            msg.channel.send({embed: {
                title: body.title + ' (' + body.num + ')',
                image: { url:body.img },
                description: body.alt,
                url: url
            }})
        })
    }
}
