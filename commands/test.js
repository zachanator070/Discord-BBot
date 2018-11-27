module.exports = {
    description: 'Tests the bot',
    action: function (command) {
        command.channel.send('Testing 123!');
    }
};