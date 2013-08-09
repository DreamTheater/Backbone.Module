(function () {
    'use strict';

    ////////////////////

    var expect = chai.expect;

    ////////////////////

    describe('Backbone', function () {
        describe('#define()', function () {
            it('should define an object', function () {
                var Object = Backbone.define('company.application.Object', {
                    foo: 'foo',
                    bar: 'bar',
                    baz: 'baz'
                });

                expect(Object).to.equal(company.application.Object);
            });

            it('should define a function', function () {
                var Function = Backbone.define('company.application.Function', function () {
                    return sinon.spy();
                });

                expect(Function).to.equal(company.application.Function);
            });
        });
    });
}());
