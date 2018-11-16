require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const cmdParser = require('./commandBootstrap');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.content.startsWith('!')){
        cmdParser.parseCommand(msg);
    }
});

client.login(process.env.BOT_TOKEN);