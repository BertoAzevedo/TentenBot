const { joinVoiceChannel } = require("@discordjs/voice")

let client
let connection = null

exports.init = function (bot) {
	client = bot
}

exports.run = function (msg, args) {
	switch (args[0]) {
		case "join":
			const channel = client.channels.cache.get(msg.member.voice.channelId)
			connection = joinVoiceChannel({
				channelId: channel.id,
				guildId: channel.guild.id,
				adapterCreator: channel.guild.voiceAdapterCreator
			})
			break
		case "leave":
			if (connection !== null) connection.destroy()
			break
		default:
			break
	}
}

exports.info = function () {
	return "!tenten <parameter> - Tell TentenBot to 'join' or 'leave'"
}
