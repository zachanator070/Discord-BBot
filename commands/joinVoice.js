module.exports = {
    description: 'Makes the bot join your voice channel',
    action: function (command) {
        if (command.member.voiceChannel) {
            command.member.voiceChannel.join()
                .then(connection => {
                    command.reply('I have joined the channel!')
                })
        }
    }
};