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
        var Model = Backbone.define('Backbone.TestSuite.Model', Backbone.Model),
            Collection = Backbone.define('Backbone.TestSuite.Collection', Backbone.Collection),
            Router = Backbone.define('Backbone.TestSuite.Router', Backbone.Router),
            History = Backbone.define('Backbone.TestSuite.History', Backbone.History),
            View = Backbone.define('Backbone.TestSuite.View', Backbone.View);

        strictEqual(Backbone.TestSuite.Model, Model);
        strictEqual(Backbone.TestSuite.Collection, Collection);
        strictEqual(Backbone.TestSuite.Router, Router);
        strictEqual(Backbone.TestSuite.History, History);
        strictEqual(Backbone.TestSuite.View, View);
    });
});
