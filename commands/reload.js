let TentenBot
exports.init = function (bot) {
	TentenBot = bot
}

exports.run = function (msg) {
	msg.delete()
	TentenBot.loadCommands()
}

exports.info = function () {
	return "!reload - Reload modules"
}
