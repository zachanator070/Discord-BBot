module.exports = function (command) {
	let user_id = command.mentions.users.first().id;
	command.channel.send(`<@${user_id}> I fart in your general direction! Your mother was a hamster and your father smells of elderberries!`)
};