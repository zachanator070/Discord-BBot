module.exports = {
    description: 'Lists commands and their descriptions',
    action: function(command) {
        let msg = 'Command List:\n--------------------------\n';

        for(let cmd in this.commandTree){
            msg += `* **!${cmd}** : ${this.commandTree[cmd].description}\n`;
            if(this.commandTree[cmd].hasOwnProperty('example')){
                msg += '```' + this.commandTree[cmd].example +'```';
            }
        }
        command.channel.send(msg);
    }
};