$(function () {
    'use strict';

    ////////////
    // MODULE //
    ////////////

    module('Backbone.define');

    ///////////
    // TESTS //
    ///////////

    test('define namespaces', function () {
        Backbone.define('Backbone.TestSuite.Model', Backbone.Model);
        Backbone.define('Backbone.TestSuite.Collection', Backbone.Collection);
        Backbone.define('Backbone.TestSuite.Router', Backbone.Router);
        Backbone.define('Backbone.TestSuite.History', Backbone.History);
        Backbone.define('Backbone.TestSuite.View', Backbone.View);

        strictEqual(Backbone.TestSuite.Model, Backbone.Model);
        strictEqual(Backbone.TestSuite.Collection, Backbone.Collection);
        strictEqual(Backbone.TestSuite.Router, Backbone.Router);
        strictEqual(Backbone.TestSuite.History, Backbone.History);
        strictEqual(Backbone.TestSuite.View, Backbone.View);
    });
});
