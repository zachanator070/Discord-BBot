const {Attachment} = require('discord.js');
module.exports = function(command) {
    const attachment = new Attachment('https://gfycat.com/HeartfeltSkeletalCutworm');
    command.channel.send('🅱️incero!',attachment);
};