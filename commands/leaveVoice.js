module.exports = {
    description: 'Makes the bot leave your voice channel',
    action: function (command) {
        if (command.member.voice.channel) {
            command.member.voice.channel.leave();
        }
    }
};