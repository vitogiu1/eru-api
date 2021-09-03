//Dependências
const { Client } = require('discord.js')
const client = new Client({ intents: 32767})
const eruapi = require('../index')

//api
const dbl = new eruapi({
    token: "token do seu bot, conseguido na botlist."
})

//quando o bot ficar online, irá postar as informações
client.on('ready', async () => {
    let postServerCount = await dbl.serverCount(client.guilds.cache.size)
})

//logando no bot
client.login("token do seu bot")