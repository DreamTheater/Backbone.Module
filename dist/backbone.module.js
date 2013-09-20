/**
 * Backbone.Module v0.1.8
 * https://github.com/DreamTheater/Backbone.Module
 *
 * Copyright (c) 2013 Dmytro Nemoga
 * Released under the MIT license
 */
(function (factory) {
    'use strict';

    if (typeof exports !== 'undefined') {
        module.exports = factory({
            _: require('underscore'),
            Backbone: require('backbone')
        });
    } else {
        factory(window);
    }
}(function (environment) {
    'use strict';

    var _ = environment._, Backbone = environment.Backbone;

    ////////////////////

    var Module = Backbone.Module = function (namespace, callback) {

        ////////////////////

        var isNode = typeof exports !== 'undefined';

        ////////////////////

        var object = isNode ? global : window, tokens = namespace.split('.'), main = tokens.pop();

        _.each(tokens, function (token) {
            var context = object[token];

            if (!context) {
                context = object[token] = {};
            }

            object = context;
        });

        object = object[main] = _.isFunction(callback) ? callback.call(object) : callback;

        return object;
    };

    return Module;
}));
