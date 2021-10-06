const fs = require("fs")
const Discord = require('discord.js')

const config = JSON.parse(fs.readFileSync("config.json"))
const client = new Discord.Client()

client.on("ready", () => {
	console.log("Setting up configs...")
	client.config = config
	console.log("Loading modules...")
	client.loadCommands()
	console.log("Bot is ready!")
})

client.on("message", async (msg) => {
	if (!msg.content.startsWith(config.prefix)) return

	// Get all the arguments
	let tmp = msg.content.substring(config.prefix.length, msg.length).split(" ")
	let args = []

	console.log("Args: " + tmp)
	for (let i = 1; i < tmp.length; i++) {
		args.push(tmp[i])
	}

	// Store the command separately
	let cmd = tmp[0]
	console.log("Command: " + cmd)

	if (client.modules.hasOwnProperty(cmd))
		return client.modules[cmd].run(msg, args)
	if (config.commandError.sendToModule === true) {
		return client.modules[config.commandError.module][
			config.commandError.function
		](msg, cmd)
	}
	return msg.delete()
})

client.loadCommands = function () {
	client.modules = {}

	// Load up all the modules
	fs.readdirSync("./commands/").forEach((file) => {
		let name = file.slice(0, -3)

		delete require.cache[require.resolve(`./commands/${file}`)]

		try {
			client.modules[name] = require(`./commands/${file}`)
			if (client.modules[name].hasOwnProperty("init")) {
				client.modules[name].init(client)
			}

			console.log(`Module ${name} is ready`)
		} catch (e) {
			console.error(`Error in module ${name}:\n${e.stack}`)
		}
	})
}

client.login(config.token)
