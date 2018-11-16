module.exports = function (command) {
	let user_id = command.mentions.users.first().id;
	let insults = [
		`<@${user_id}> I fart in your general direction! Your mother was a hamster and your father smells of elderberries!`,
		`<@${user_id}> is compensating for something 😏`,
		`<@${user_id}> may look like an idiot and talk like an idiot but don't let that fool you. They really are an idiot.`,
		`<@${user_id}>, you are a sad strange little man, and you have my pity.`,
		`<@${user_id}> has no enemies, but is intensely disliked by their friends`,
		`<@${user_id}>, you bowl like your momma. Unless of course she bowls well, in which case you bowl nothing like her.`,
		`<@${user_id}>, you are a fart factory, slug-slimed sack of rat guts in cat vomit. A cheesy scap picked pimple squeezing finger bandage. A week old maggot burger with everything on it and flies on the side.`,

	];
	let randomIndex = Math.floor(Math.random() * insults.length);
	command.channel.send(insults[randomIndex]);
};