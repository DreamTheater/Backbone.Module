$(function () {
    'use strict';

    ////////////
    // MODULE //
    ////////////

    module('Backbone.define');

    ///////////
    // TESTS //
    ///////////

    test('define modules', function () {
        Backbone.define('Backbone.TestPackage.Model', function () {
            return Backbone.Model;
        });

        Backbone.define('Backbone.TestPackage.Collection', function () {
            return Backbone.Collection;
        });

        Backbone.define('Backbone.TestPackage.Router', function () {
            return Backbone.Router;
        });

        Backbone.define('Backbone.TestPackage.History', function () {
            return Backbone.History;
        });

        Backbone.define('Backbone.TestPackage.View', function () {
            return Backbone.View;
        });

        strictEqual(Backbone.define('Backbone.TestPackage.Model'), Backbone.Model);
        strictEqual(Backbone.define('Backbone.TestPackage.Collection'), Backbone.Collection);
        strictEqual(Backbone.define('Backbone.TestPackage.Router'), Backbone.Router);
        strictEqual(Backbone.define('Backbone.TestPackage.History'), Backbone.History);
        strictEqual(Backbone.define('Backbone.TestPackage.View'), Backbone.View);
    });
});
