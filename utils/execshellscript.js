const { exec } = require("child_process")

export default function executeShellScript(filepath) {
	let stdoutResult = ""
	let stderrResult = ""

	var yourscript = exec(filepath, (error, stdout, stderr) => {
		stdoutResult = stdout
		stderrResult = stderr
		if (error !== null) {
			console.log(`exec error: ${error}`)
		}
	})

	return stdoutResult + "\n" + stderrResult
}
