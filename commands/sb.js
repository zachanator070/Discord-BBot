const fs = require('fs');
module.exports = {
    description: 'Plays a sound from the soundboard',
    action: function (command) {
        let args = command.content.substring(1).split(' ').slice(1);
        if (!command.guild) return;
        if (args.length === 0) {
            command.reply('Give me a sound to play!');
            return;
        }
        fs.readdir('./soundboard', function (err, files) {
            if (err) {
                console.log(err)
                return;
            }
            let filteredFiles = files.filter((cur) => {
                return cur.indexOf(args[0]) > -1;
            });
            if (filteredFiles.length === 0) {
                command.reply('I couldn\'t not find the sound you asked for :(');
                return;
            }

            if (command.member.voiceChannel) {
                command.member.voiceChannel.join()
                    .then(connection => { // Connection is an instance of VoiceConnection
    
                        let dispatcher = connection.playFile(process.cwd() + '/soundboard/' + filteredFiles[0]);
                        dispatcher.on('end', () => {
                            command.member.voiceChannel.leave();
                        })
                    })
    
    
                    .catch(console.log);
            } else {
                command.reply('You need to join a voice channel first!');
            }

        });
    }
}