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
        strictEqual(Backbone.TestPackage.Model, Backbone.Model);
        strictEqual(Backbone.TestPackage.Collection, Backbone.Collection);
        strictEqual(Backbone.TestPackage.View, Backbone.View);
        strictEqual(Backbone.TestPackage.Router, Backbone.Router);
        strictEqual(Backbone.TestPackage.History, Backbone.History);
    });

    test('resolving namespaces', function () {
        strictEqual(Backbone.define('Backbone.TestPackage.Model'), Backbone.Model);
        strictEqual(Backbone.define('Backbone.TestPackage.Collection'), Backbone.Collection);
        strictEqual(Backbone.define('Backbone.TestPackage.View'), Backbone.View);
        strictEqual(Backbone.define('Backbone.TestPackage.Router'), Backbone.Router);
        strictEqual(Backbone.define('Backbone.TestPackage.History'), Backbone.History);
    });

    test('credits modules', function () {
        strictEqual(Backbone.TestPackage.Model.namespace, 'Backbone.TestPackage.Model');
        strictEqual(Backbone.TestPackage.Collection.namespace, 'Backbone.TestPackage.Collection');
        strictEqual(Backbone.TestPackage.View.namespace, 'Backbone.TestPackage.View');
        strictEqual(Backbone.TestPackage.Router.namespace, 'Backbone.TestPackage.Router');
        strictEqual(Backbone.TestPackage.History.namespace, 'Backbone.TestPackage.History');

        strictEqual(Backbone.TestPackage.Model.className, 'Model');
        strictEqual(Backbone.TestPackage.Collection.className, 'Collection');
        strictEqual(Backbone.TestPackage.View.className, 'View');
        strictEqual(Backbone.TestPackage.Router.className, 'Router');
        strictEqual(Backbone.TestPackage.History.className, 'History');
    });
});
