// This is your automated build file
/* globals jake: false, desc: false, task: false, complete: false, fail: false */
(function() {
	"use strict";

	var semver = require("semver");
	var jshint = require("simplebuild-jshint");

	//**** General Purpose Tasks

	desc("Default build");
	task("default", ["version", "Lint"], function() {
		console.log("\n\nBUILD OK");
	});

	desc("Run a localhost server");
	task("run", function() {
		jake.exec("node node_modules/http-server/bin/http-server src", {interactive: true}, complete);
	});

	//**** Supporting Tasks

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
		process.stdout.write("Linting JavaScript: ");
		
		jshint.checkFiles({ 
			files: ["Jakefile.js", "src/**/*.js" ],
			options: {
				bitwise: true,
				eqeqeq: true,
				forin: true,
				freeze: true,
				futurehostile: true,
				latedef: "nofunc",
				noarg: true,
				nocomma: true,
				nonbsp: true,
				nonew: true,
				strict: true,
				undef: true,


				node: true,
				browser: true
			},
			globals: {
				describe: false,
				it: false,
				before: false,
				after: false,
				beforeEach: false,
				afterEach: false
			}
		}, complete, fail);
	}, { async: true });

}());