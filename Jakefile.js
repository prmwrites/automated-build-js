// This is your automated build file
(function() {
	"use strict";

	

	desc("Default build");
	task("default", ["version"], function() {
		console.log("\n\nBUILD OK");
	});

	desc("Check Node version");
	task("version", function() {
		console.log("Check Node version: .");
		
		var packageJson = require("./package.json")
		var expectedVersion = packageJson.engines.node;
		var actualVersion = process.version;

		if (actualVersion !== expectedVersion) {
			fail("Incorrect Node version: expected " + expectedVersion + ", but was " + actualVersion);
		} 
	});

}());