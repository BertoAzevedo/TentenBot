const { joinVoiceChannel } = require("@discordjs/voice")

let client
let connection = null

exports.init = function (bot) {
	client = bot
}

exports.run = function (msg, args) {
	switch (args[0]) {
		case "join":
			if (!msg.member.voice.channelId) {
				msg.channel.send("Please join a voice channel first! ^.^")
				return
			}

			msg.channel.send("I'm comming!!")
			const channel = client.channels.cache.get(msg.member.voice.channelId)
			connection = joinVoiceChannel({
				channelId: channel.id,
				guildId: channel.guild.id,
				adapterCreator: channel.guild.voiceAdapterCreator
			})
			break
		case "leave":
			if(!connection)
			{
				msg.channel.send("But i'm not in your voice channel...")
				break
			}
			else
			{
				msg.channel.send("Ohh... ok... Sadge")
				if (connection !== null) connection.destroy()
				connection = null
				break
			}
		default:
			break
	}
}

exports.info = function () {
	return "!tenten <parameter> - Tell TentenBot to 'join' or 'leave' your voice channel"
}
