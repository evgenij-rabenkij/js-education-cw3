exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: ['spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function () {
        require("babel-core/register")({presets: ["es2015"]});

        const AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    }
} 