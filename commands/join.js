let TentenBot
exports.init = function (bot) {
	TentenBot = bot
}

exports.run = function (msg, args) {
	let member = msg.member
	if (!member.voiceChannelID) {
		return msg.reply(" Please join a voice channel first!").catch(console.error)
	}

	const channel = TentenBot.channels.get(member.voiceChannelID)
	if (!channel)
		return console.log(
			"The channel " + member.voiceChannelID + " does not exist!"
		)
	channel
		.join()
		.then((connection) => {
			console.log("Successfully connected.")
		})
		.catch((e) => {
			console.error(e)
		})
}

exports.info = function () {
	return "!example - This is a example"
}
