const execSync = require("child_process").execSync

module.exports.executeShellScript = function (filepath) {
	return require('child_process').execSync(filepath).toString()
}
