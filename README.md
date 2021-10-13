# TentenBot
Personal Assistant Discord Bot
## Installing:
1. Ensure you have node installed
2. Run `npm install`
3. Rename the `config_example.json` to `config.json` and modify it's values with your data (discord token, and prefix)

## Modules:
This project is based in modules. You can personalize and create new modules for your personal uses.
Example:
```
let TentenBot
exports.init = function (bot) {
	TentenBot = bot
}

exports.run = function (msg, args) {
	// Code goes here
}

exports.info = function () {
	return "!example - This is a example"
}
```

##### Available modules

You can check the available modules using the following command:

- `<prefix>commands`
  Shows the list of available commands