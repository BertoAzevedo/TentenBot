let kuro
exports.init = function (bot) {
	kuro = bot
}

exports.run = function (msg, args) {
	msg.delete()
	msg.channel.send("Ping?").then((message) => {
		message.edit(
			`Pong! (took: ${message.createdTimestamp - msg.createdTimestamp}ms)`
		)
	})
}
