exports.config = {
    seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.41.0.jar',
    seleniumPort: null,

    chromeDriver: './node_modules/protractor/selenium/chromedriver',
    chromeOnly: false,

    seleniumArgs: [],

    seleniumAddress: 'http://localhost:4444/wd/hub',

    allScriptsTimeout: 11000,

    specs: [
        'test/e2e/*_spec.js',
        // 'test/spec/*_spec.js',
    ],

    suites: {
        // smoke: './test/spec/smoketests/*.js',
        // full: './test/spec/*.js'
    },

    capabilities: {
        'browserName': 'chrome'
    },

    multiCapabilities: [],

    baseUrl: 'http://localhost:' + (process.env.HTTP_PORT || '9001'),

    rootElement: 'body',

    onPrepare: function() {
        // At this point, global 'protractor' object will be set up, and jasmine
        // will be available. For example, you can add a Jasmine reporter with:
        //     jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
        //         'outputdir/', true, true));
    },

    framework: 'jasmine',

    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    },


    cucumberOpts: {
        require: 'cucumber/stepDefinitions.js',
        tags: '@dev',
        format: 'summary'
    },
    onCleanUp: function() {}
};
