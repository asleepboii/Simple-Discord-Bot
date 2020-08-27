const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Online');
});

if (message.content === `{Command}`) {
	message.channel.send('{Response}');
}else if (message.content === `{Command}`) {
	message.channel.send('{Response}');
}else if (message.content === `{Command}`) {
	message.channel.send(`{Response}`);
}else if (message.content === `{Command}`) {
	message.channel.send(`{Response}`);
}
// Follow This else if pattern to add extra commands
client.login('{Token}');
