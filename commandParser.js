const Discord = require('discord.js');
module.exports = class CommandParser {
    constructor(){
        this.commandTree = {};
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

};