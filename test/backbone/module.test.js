(function (factory) {
    'use strict';

    var isNode = typeof module === 'object' && typeof exports === 'object';

    ////////////////////

    var root = isNode ? require('../environment.js') : window;

    ////////////////////

    factory(root, isNode);

}(function (root) {
    'use strict';

    var _ = root._, Backbone = root.Backbone,

        chai = root.chai,
        sinon = root.sinon;

    ////////////////////

    var expect = chai.expect;

    ////////////////////

    describe('Backbone.Module', function () {

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

        describe('#constructor(name, callback)', function () {
            it('should define simple module', function () {
                var module = Backbone.Module('foo', function () {
                    return 'Hello';
                });

                expect(module).to.be.an.instanceOf(Backbone.Module).and.equal(Backbone.Module.modules['foo']);
            });

            it('should define nested module', function () {
                var module = new Backbone.Module('foo.bar.baz', function () {
                    return 'World';
                });

                expect(module).to.be.an.instanceOf(Backbone.Module).and.equal(Backbone.Module.modules['foo.bar.baz']);
            });

            it('should define module with dependencies', function () {
                var module = Backbone.Module.define('foo.bar', function (require) {
                    return require('foo') + ' ' + require('foo.bar.baz') + '!';
                });

                expect(module).to.be.an.instanceOf(Backbone.Module).and.equal(Backbone.Module.modules['foo.bar']);
            });
        });

        describe('#extract()', function () {
            it('should call module\'s callback function and return module\'s body', function () {
                expect(Backbone.Module.require('foo.bar')).to.equal('Hello World!');
            });
        });
    });
}));
