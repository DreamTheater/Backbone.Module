$(function () {
    'use strict';

    ////////////
    // MODULE //
    ////////////

    module('Backbone.Class');

    ///////////
    // TESTS //
    ///////////

    test('define classes', function () {
        var Model = Backbone.Model.define('Backbone.TestSuite.Model'),
            Collection = Backbone.Collection.define('Backbone.TestSuite.Collection'),
            Router = Backbone.Router.define('Backbone.TestSuite.Router'),
            History = Backbone.History.define('Backbone.TestSuite.History'),
            View = Backbone.View.define('Backbone.TestSuite.View');

        strictEqual(Backbone.TestSuite.Model, Model);
        strictEqual(Backbone.TestSuite.Collection, Collection);
        strictEqual(Backbone.TestSuite.Router, Router);
        strictEqual(Backbone.TestSuite.History, History);
        strictEqual(Backbone.TestSuite.View, View);
    });
});
