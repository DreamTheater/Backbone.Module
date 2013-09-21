(function (factory) {
    'use strict';

    var isNode = typeof module === 'object' && typeof exports === 'object';

    ////////////////////

    var root = isNode ? {
        _: require('underscore'),
        Backbone: require('backbone')
    } : window;

    ////////////////////

    (isNode ? exports : Backbone).Module = factory(root, isNode);

}(function (root) {
    'use strict';

    var _ = root._, Backbone = root.Backbone;

    ////////////////////

    var Module = Backbone.Module = function (namespace, callback) {
        var scope = window, tokens = namespace.split('.'), main = tokens.pop();

        _.each(tokens, function (token) {
            var layer = scope[token];

            if (!layer) {
                layer = scope[token] = {};
            }

            scope = layer;
        });

        scope = scope[main] = _.isFunction(callback) ? callback.call(scope) : callback;

        return scope;
    };

    return Module;
}));
