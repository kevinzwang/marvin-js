const Commando = require('discord.js-commando')

module.exports = class TemplateCommand extends Commando.Command {
    constructor (client) {
        super (client, {
            name: 'template',
            group: 'group',
            memberName: 'template',
            description: 'a template for commands',
            examples: [
                'template',
                'template foo'
            ]
        })
    }
    run (msg, args) {
        msg.reply('you said: `' + args + '`')    
    }
}
