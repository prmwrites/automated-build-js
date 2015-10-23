// This is your automated build file
(function() {
	"use strict";

	console.log("\n\nBUILD OK");

	desc("Default build")
	task("default", function() {
		console.log("Hello, I'm the default taks");
	});

	desc("Pure ridiculosity");
	task("gooble", function() {
		console.log("Gooble gooble!!");
	});
}());