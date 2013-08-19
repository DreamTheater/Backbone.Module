module.exports = function (config) {
    'use strict';

    config.set({
        frameworks: ['mocha'],

        files: [
            // Assertion Libraries
            'lib/chai/chai.js',
            'lib/sinon/sinon.js',
            'lib/sinon/sinon.chai.js',

            // Libraries
            'lib/jquery/jquery.js',
            'lib/underscore/underscore.js',
            'lib/backbone/backbone.js',

            // Sources
            'src/backbone/define.js',

            // Tests
            'test/backbone/define.test.js'
        ],

        preprocessors: {
            'src/**/*.js': ['coverage']
        },

        reporters: ['progress', 'coverage'],

        coverageReporter: {
            type: 'html',
            dir: 'coverage'
        },

        reportSlowerThan: 75,

        browsers: ['Firefox'],

        autoWatch: true
    });
};
