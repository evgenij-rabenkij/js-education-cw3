exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function () {
        require("babel-core/register")({presets: ["es2015"]});
    }
} 