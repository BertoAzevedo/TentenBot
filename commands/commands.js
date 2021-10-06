let TentenBot
exports.init = function (bot) {
	TentenBot = bot
}

exports.run = function (msg, args) {
	let info = ""
	for (var [key, value] of Object.entries(TentenBot.modules)) {
		if (value.hasOwnProperty("info")) {
			info += "\n" + value.info()
		}
	}
	if(info !== "")
	{
		return msg.channel.send(`\n${info}\n`)
	}
}

exports.info = function () {
	return "!commands - List of commands"
}
