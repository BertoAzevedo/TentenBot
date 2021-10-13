exports.run = function(msg) {
	msg.channel.send("Beep Boop, rebooting...").then(() => process.exit(1))
}

exports.info = function() {
	return "!reboot - Reboot TentenBot"
}