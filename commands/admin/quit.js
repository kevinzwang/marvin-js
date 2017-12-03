const Commando = require('discord.js-commando')

module.exports = class QuitCommand extends Commando.Command {
    constructor (client) {
        super (client, {
            name: 'quit',
            group: 'admin',
            memberName: 'quit',
            description: 'Shuts down the bot',
            examples: [
                'quit'
            ]
        })
    }
    hasPermission (msg) {
        return this.client.isOwner(msg.author);
    }
    run (msg) {
        msg.channel.send('Bye!')
        this.client.destroy()
        console.info('[INFO] Quit command sent from Discord, terminating...')
        process.exit()
    }
}
