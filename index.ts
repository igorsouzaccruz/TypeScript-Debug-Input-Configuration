// use a lib prompt-sync to recept input from user in console
const promptSync = require("prompt-sync");
	const prompter = promptSync();

	const text: string = prompter("Write anything here: ");

	console.log('Use a break-point here to see if works!');
	console.log(text);