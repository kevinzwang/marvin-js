const Commando = require('discord.js-commando')
const config = require('./config.json')
const path = require('path')


const client = new Commando.Client({
    owner: config.owner,
    commandPrefix: config.prefix,
    disableEveryone: true
})

client
    .on('ready', () => {
        console.log(
            '----------\n' +
            `Success! ${client.user.username} is connected!\n` +
            `ID: ${client.user.id}\n` +
            `TIME: ${(new Date())}\n` +
            '----------'
        )
    })

client.registry
    .registerGroups([
        ['fun', 'Fun!'],
        ['admin', 'Admin']
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'))
    .registerDefaults()

client.login(config.token)
