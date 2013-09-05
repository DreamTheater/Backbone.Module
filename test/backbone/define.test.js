(function (expect) {
    'use strict';

    describe('Backbone', function () {

        ////////////////////

        var object;

        ////////////////////

//        before(function () {
//
//        });

//        beforeEach(function () {
//
//        });

//        afterEach(function () {
//
//        });

//        after(function () {
//
//        });

        ////////////////////

        describe('#define(namespace, object)', function () {
            it('should define object', function () {
                object = Backbone.define('foo.bar', {});

                expect(object).to.equal(foo.bar);
            });

            it('should extend object', function () {
                object = Backbone.define('foo.bar.baz.qux', 'Hello, World!');

                expect(object).to.equal(foo.bar.baz.qux).and.equals('Hello, World!');
            });

            it('should override object', function () {
                object = Backbone.define('foo.bar.baz.qux', 'Goodbye, World!');

                expect(object).to.equal(foo.bar.baz.qux).and.equals('Goodbye, World!');
            });
        });
    });
}(chai.expect));
