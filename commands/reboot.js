exports.run = function(msg) {
	msg.delete().then(() => process.exit(1))
}

exports.info = function() {
	return "!reboot - Reboot TentenBot"
}