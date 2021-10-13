let client
exports.init = function (bot) {
	client = bot
}

exports.run = function (msg, args) {
	let info = ""
	for (var [key, value] of Object.entries(client.modules)) {
		if (value.hasOwnProperty("info")) {
			info += "\n" + value.info()
		}
	}
	return msg.channel.send(`\n${info}\n`)
}

exports.info = function () {
	return "!commands - List of commands"
}
