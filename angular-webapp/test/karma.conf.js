// Karma configuration
module.exports = function (config) {
    'use strict';

    //noinspection JSUnresolvedVariable
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files / patterns to load in browser
        //noinspection JSUnresolvedVariable
        files: [
            "lib/underscore/underscore-1.6.0.js",
            "lib/jquery/jquery-2.1.0.js",
            "lib/bootstrap/js/bootstrap.min.js",
            "lib/angular/angular-1.2.13.js",
            "lib/angular/angular-route-1.2.13.js",
            "lib/i18n/jquery.i18n.properties-1.0.9.js",
            "app/js/app.js",
            "app/js/core/coreModule.js",
            "app/js/core/i18nService.js",
            "app/js/components/componentsModule.js",
            "app/js/components/genericDirectives.js",
            "app/js/signup/signupModule.js",
            "app/js/signup/signupService.js",
            "app/js/signup/signupCtrl.js",
            "test/lib/**/*.js",
            "test/unit/**/components/*.js",
//            "test/unit/**/core/*.js",
            "test/unit/**/signup/*.js"
//            "test/unit/**/welcome/*.js",
//            "test/unit/*.js"
        ],

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots', 'junit', 'coverage'],

        preprocessors: {'app/**/*.js': 'coverage'},

        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'test/target/karma-reports/coverage/'
        },

        junitReporter: {
            outputFile: 'test/target/karma-reports/junit/test-results.xml'
        },

        // web server port
        port: 9876,

        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
