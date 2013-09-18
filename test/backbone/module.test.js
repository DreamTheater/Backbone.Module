(function (factory) {
    'use strict';

    if (typeof exports !== 'undefined') {

        ////////////////////

        var environment = require('../environment.js');

        ////////////////////

        module.exports = factory(environment);
    } else {
        factory(window);
    }
}(function (environment) {
    'use strict';

    var _ = environment._, Backbone = environment.Backbone,

        chai = environment.chai,
        sinon = environment.sinon;

    ////////////////////

    var expect = chai.expect;

    ////////////////////

    return describe('Backbone', function () {

        ////////////////////

        var object;

        ////////////////////

        // before(function () {
        //
        // });

        // beforeEach(function () {
        //
        // });

        // afterEach(function () {
        //
        // });

        // after(function () {
        //
        // });

        ////////////////////

        describe('#Module(namespace, object)', function () {
            it('should define object', function () {
                object = Backbone.Module('foo.bar', {});

                expect(object).to.equal(foo.bar);
            });

            it('should extend object', function () {
                object = Backbone.Module('foo.bar.baz.qux', 'Hello, World!');

                expect(object).to.equal(foo.bar.baz.qux).and.equals('Hello, World!');
            });

            it('should override object', function () {
                object = Backbone.Module('foo.bar.baz.qux', 'Goodbye, World!');

                expect(object).to.equal(foo.bar.baz.qux).and.equals('Goodbye, World!');
            });
        });
    });
}));
