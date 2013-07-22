/*jshint maxstatements:11 */
$(function () {
    'use strict';

    ////////////
    // MODULE //
    ////////////

    module('Backbone.define', {
        setup: function () {
            Backbone.define('Backbone.TestPackage.Model', function () {
                return Backbone.Model;
            });

            Backbone.define('Backbone.TestPackage.Collection', function () {
                return Backbone.Collection;
            });

            Backbone.define('Backbone.TestPackage.View', function () {
                return Backbone.View;
            });

            Backbone.define('Backbone.TestPackage.Router', function () {
                return Backbone.Router;
            });

            Backbone.define('Backbone.TestPackage.History', function () {
                return Backbone.History;
            });
        }
    });

    ///////////
    // TESTS //
    ///////////

    test('definition modules', function () {
        var Model = Backbone.TestPackage.Model,
            Collection = Backbone.TestPackage.Collection,
            View = Backbone.TestPackage.View,
            Router = Backbone.TestPackage.Router,
            History = Backbone.TestPackage.History;

        strictEqual(Model, Backbone.Model);
        strictEqual(Collection, Backbone.Collection);
        strictEqual(View, Backbone.View);
        strictEqual(Router, Backbone.Router);
        strictEqual(History, Backbone.History);
    });

    test('resolving namespaces', function () {
        var Model = Backbone.define('Backbone.TestPackage.Model'),
            Collection = Backbone.define('Backbone.TestPackage.Collection'),
            View = Backbone.define('Backbone.TestPackage.View'),
            Router = Backbone.define('Backbone.TestPackage.Router'),
            History = Backbone.define('Backbone.TestPackage.History');

        strictEqual(Model, Backbone.Model);
        strictEqual(Collection, Backbone.Collection);
        strictEqual(View, Backbone.View);
        strictEqual(Router, Backbone.Router);
        strictEqual(History, Backbone.History);
    });
});
