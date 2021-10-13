const { executeShellScript } = require("../utils/utils.js")

exports.run = function (msg, args) {
	let output = executeShellScript("./scripts/listdevices.sh")
	msg.channel.send(output)
}

exports.info = function () {
	return "!listdevices - List all devices in home network"
}
