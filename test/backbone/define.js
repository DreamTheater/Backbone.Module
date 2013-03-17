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
        Backbone.define('Backbone.TestPackage.Model', Backbone.Model);
        Backbone.define('Backbone.TestPackage.Collection', Backbone.Collection);
        Backbone.define('Backbone.TestPackage.Router', Backbone.Router);
        Backbone.define('Backbone.TestPackage.History', Backbone.History);
        Backbone.define('Backbone.TestPackage.View', Backbone.View);

        strictEqual(Backbone.define('Backbone.TestPackage.Model'), Backbone.Model);
        strictEqual(Backbone.define('Backbone.TestPackage.Collection'), Backbone.Collection);
        strictEqual(Backbone.define('Backbone.TestPackage.Router'), Backbone.Router);
        strictEqual(Backbone.define('Backbone.TestPackage.History'), Backbone.History);
        strictEqual(Backbone.define('Backbone.TestPackage.View'), Backbone.View);
    });
});
