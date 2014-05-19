module.exports = function(config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-resource/angular-resource.js',
            'app/bower_components/angular-cookies/angular-cookies.js',
            'app/bower_components/angular-sanitize/angular-sanitize.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/scripts/*.js',
            'app/scripts/**/*.js',
            // 'test/mock/**/*.js',
            'test/spec/**/*.js'
        ],

        autoWatch: true,

        exclude: [],

        port: 8080,

        logLevel: config.LOG_INFO,

        browsers: ['Chrome'],

        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher'
        ],

        singleRun: false,
    });
};
