module.exports = {
    description: 'Makes the bot leave your voice channel',
    action: function (command) {
        if (command.member.voiceChannel) {
            command.member.voiceChannel.leave();
        }
    }
};