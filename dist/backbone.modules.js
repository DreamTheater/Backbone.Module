/**
 * Backbone.Modules v0.1.5
 * https://github.com/DreamTheater/Backbone.Modules
 *
 * Copyright (c) 2013 Dmytro Nemoga
 * Released under the MIT license
 */
(function () {
    'use strict';

    Backbone.define = function (namespace, callback) {
        var object = window, properties = namespace.split('.'), className = properties.pop();

        _.each(properties, function (property) {
            var proxyObject = object[property];

            if (!proxyObject) {
                proxyObject = object[property] = {};
            }

            object = proxyObject;
        });

        object = object[className] = _.isFunction(callback) ? callback.call(object) : callback;

        return object;
    };
}());
