// This is your automated build file
(function() {
	"use strict";

	var semver = require("semver");

	desc("Default build");
	task("default", ["version", "Lint"], function() {
		console.log("\n\nBUILD OK");
	});

	desc("Check Node version");
	task("version", function() {
		console.log("Check Node version: .");
		
		var packageJson = require("./package.json");
		var expectedVersion = packageJson.engines.node;
		var actualVersion = process.version;

		if (semver.neq(expectedVersion, actualVersion)) {
			fail("Incorrect Node version: expected " + expectedVersion + ", but was " + actualVersion);
		} 
	});

	desc("Lint JavaScript code");
	task("Lint", function() {
		console.log("Linting JavaScript: .");

		jake.exec("node node_modules/jshint/bin/jshint Jakefile.js", { interactive: true }, complete);
	}, {async: true });

}());