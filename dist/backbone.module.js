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
}(function (root) {
    'use strict';

    var _ = root._, Backbone = root.Backbone;

    ////////////////////

    var Module = Backbone.Module = function (namespace, callback) {
        var object = typeof exports !== 'undefined' ? global : window,

            properties = namespace.split('.'),
            destination = properties.pop();

        _.each(properties, function (property) {
            var proxyObject = object[property];

            if (!proxyObject) {
                proxyObject = object[property] = {};
            }

            object = proxyObject;
        });

        object = object[destination] = _.isFunction(callback) ? callback.call(object) : callback;

        return object;
    };

    return Module;
}));
