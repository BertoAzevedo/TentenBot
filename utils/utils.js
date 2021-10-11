const { exec } = require("child_process")

module.exports.executeShellScript = function (filepath) {
	let stdoutResult = ""
	let stderrResult = ""

	exec(filepath, (error, stdout, stderr) => {
		stdoutResult = stdout
		stderrResult = stderr
		if (error !== null) {
			console.log(`exec error: ${error}`)
		}
	})

	return stdoutResult + "\n" + stderrResult
}
