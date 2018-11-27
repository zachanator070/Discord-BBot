module.exports = {
    description: 'Makes the bot join your voice channel',
    action: function (command) {
        if (command.member.voice.channel) {
            command.member.voice.channel.join()
                .then(connection => {
                    command.reply('I have joined the channel!')
                })
        }
    }
};