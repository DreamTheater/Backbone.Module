(function (expect) {
    'use strict';

    describe('Backbone', function () {
        describe('#define(namespace, object)', function () {
            it('should define the object', function () {
                Backbone.define('foo.bar.object', { foo: 'bar' });

                expect(foo.bar).to.deep.equal({
                    object: { foo: 'bar' }
                });
            });

            it('should extend the object', function () {
                Backbone.define('foo.bar.baz.qux.object', { baz: 'qux' });

                expect(foo.bar).to.deep.equal({
                    object: { foo: 'bar' },

                    baz: {
                        qux: {
                            object: { baz: 'qux' }
                        }
                    }
                });
            });
        });
    });
}(chai.expect));
