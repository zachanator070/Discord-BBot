const Discord = require('discord.js');
module.exports = class CommandParser {
    constructor(){
        this.commandTree = {};
        this.registerCommand('help',{
            description: 'Lists commands and their descriptions',
            action: this.help.bind(this)
        });
    }

    parseCommand(command) {
        let cmd = command.content.substring(1).split(' ')[0];
        if(this.commandTree.hasOwnProperty(cmd)){
            this.commandTree[cmd].action.call(this,command);
        }
    }

    registerCommand(cmdName,cmdObject){
        this.commandTree[cmdName] = cmdObject;
    }

    help(command){
        let msg = 'Command List:\n--------------------------\n';

        for(let cmd in this.commandTree){
            msg += `* **!${cmd}** : ${this.commandTree[cmd].description}\n`;
        }
        command.channel.send(msg);
    }

};