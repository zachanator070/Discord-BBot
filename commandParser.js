const Discord = require('discord.js');
module.exports = class CommandParser {
    constructor(){
        this.commandTree = {
            'test': function(command) {
                command.channel.send('Testing 123!');
            },
            'compliment':function(command) {
                let user_id = command.mentions.users.first().id;
                command.channel.send(`You are beautiful <@${user_id}>!`)
            }
        }

    }

    parseCommand(command) {
        let cmd = command.content.substring(1).split(' ')[0];
        if(this.commandTree.hasOwnProperty(cmd)){
            this.commandTree[cmd](command);
        }
    }

};