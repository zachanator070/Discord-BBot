module.exports = function (command) {
    let user_id = command.mentions.users.first().id;
    command.channel.send(`You are beautiful <@${user_id}>!`)
};