let client
exports.init = function(bot) { client = bot }

exports.run = function(msg, args) {
	if (args.length === 0) return client.edit(msg, 'You need to provide a file', 1000)

	try {
		require('fs').readFile(`./commands/${args}.js`, 'utf-8', (err, data) => {
			if (err) return client.error(err)
			return msg.channel.send(`**__Overview of ${args}.js__**\n\`\`\`javascript\n${data}\n\`\`\``)
		})
	} catch (err) {
		client.error(err)
		return client.edit(msg, `Error \n${err}`)
	}
}

exports.info = function() {
	return "!checkcommand <command> - Check command JS code"
}