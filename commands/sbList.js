const fs = require('fs');
module.exports = {
    description: 'Lists sounds available to the soundboard',
    action: function(command) {
        let msg = 'Available Sounds:\n-----------------------\n';
        fs.readdir('./soundboard',function(err, files){
            if(err){
                return;
            }
            for(let file of files){
                let fileName = file.split('.')[0];
                msg += `* ${fileName}\n`;
            }
            command.channel.send(msg);
        });
        
    }
}