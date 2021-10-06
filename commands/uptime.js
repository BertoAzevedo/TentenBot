let TentenBot
exports.init = function (bot) {
	TentenBot = bot
}

exports.run = function (msg) {
	msg.channel.send("", {
		embed: {
			title: "Bot",
			description: `Uptime: ${secondsToString(process.uptime())}`,
			color: TentenBot.config.embedColor
		}
	})
}

exports.info = function () {
	return "!uptime - Check TentenBot uptime"
}

function secondsToString(seconds) {
	seconds = Math.trunc(seconds)
	let numdays = Math.floor((seconds % 31536000) / 86400)
	let numhours = Math.floor(((seconds % 31536000) % 86400) / 3600)
	let numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60)
	let numseconds = (((seconds % 31536000) % 86400) % 3600) % 60
	return `${numdays} days ${numhours} hours ${numminutes} minutes ${numseconds} seconds`
}
