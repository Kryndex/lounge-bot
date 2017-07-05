"use strict";
var commands = function(bot, options, action) {
	const message = action.message;
	const words = message.split(" ");
	let target = null;
	if (words.indexOf("@") > -1 && words.length === 3) {
		target = words[2];
	}
	let url = "";
	if (words[0] === options.commandPrefix + "css") {
		url = "https://github.com/thelounge/lounge/wiki/CSS-Modifications";
		bot.say(action.target, (target ? target + ": " + url : url));
	} else if (words[0] === options.commandPrefix + "rp") {
		url = "https://github.com/thelounge/lounge/wiki/Reverse-Proxies";
		bot.say(action.target, (target ? target + ": " + url : url));
	} else if (words[0] === options.commandPrefix + "diff") {
		url = "https://github.com/thelounge/lounge/wiki/Differences-between-The-Lounge-and-Shout";
		bot.say(action.target, (target ? target + ": " + url : url));
	}
};

module.exports = {commands};
