module.exports = {
    description: 'Compliments a user',
    action: function (command) {
        let user_id = command.mentions.users.first().id;
        let compliments = [
            `You are beautiful <@${user_id}>!`,
            `<@${user_id}>, you are the smartest person I know!`,
            `You should be proud of yourself, <@${user_id}>`,
            `You look great today <@${user_id}>!`,
            `On a scale of 1 to 10, you are an 11 <@${user_id}>.`,
            `If you were a triangle, you would be acute one <@${user_id}> :)`
        ];
        let randomIndex = Math.floor(Math.random() * compliments.length);
        command.channel.send(compliments[randomIndex]);
    }
};