(function (factory) {
    'use strict';

    var isNode = typeof module === 'object' && typeof exports === 'object';

    ////////////////////

    var root = isNode ? require('../environment.js') : window;

    ////////////////////

    factory(root, isNode);

}(function (root, isNode) {
    'use strict';

    var _ = root._, Backbone = root.Backbone,

        chai = root.chai,
        sinon = root.sinon;

    ////////////////////

    var expect = chai.expect;

    ////////////////////

    describe('Backbone', function () {

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

                expect(object).to.equal(window.foo.bar);
            });

            it('should extend object', function () {
                object = Backbone.Module('foo.bar.baz.qux', 'Hello, World!');

                expect(object).to.equal(window.foo.bar.baz.qux).and.equals('Hello, World!');
            });

            it('should override object', function () {
                object = Backbone.Module('foo.bar.baz.qux', 'Goodbye, World!');

                expect(object).to.equal(window.foo.bar.baz.qux).and.equals('Goodbye, World!');
            });
        });
    });
}));
