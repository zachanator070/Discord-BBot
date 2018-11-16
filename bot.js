require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const CommandParser = require('./commandParser');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.content.startsWith('!')){
        let cmdParser = new CommandParser();
        cmdParser.parseCommand(msg);
    }
});

client.login(process.env.BOT_TOKEN);