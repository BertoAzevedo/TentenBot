let client
exports.init = function (bot) {
	client = bot
}

exports.run = function (msg) {
	msg.delete()
	client.loadCommands()
}

exports.info = function () {
	return "!reload - Reload modules"
}
