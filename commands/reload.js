let client
exports.init = function (bot) {
	client = bot
}

exports.run = function (msg) {
	client.loadCommands()
	msg.channel.send("Modules loaded and ready!")
}

exports.info = function () {
	return "!reload - Reload modules"
}
