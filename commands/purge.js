let TentenBot
exports.init = function(bot) { TentenBot = bot }

exports.run = function(msg, args) {
	let messagecount = parseInt(args, 10)

	if(isNaN(messagecount)) return
	
	msg.channel.fetchMessages({ limit: 100 })
		.then(messages => {
			let msgArray = messages.array()
			msgArray = msgArray.filter(m => m.author.id === TentenBot.user.id)
			msgArray.length = messagecount + 1
			msgArray.map(m => m.delete().catch(console.error))
		}
	)
}

exports.info = function() {
	return "!purge <number> - Delete previous messages"
}