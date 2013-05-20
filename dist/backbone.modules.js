/**
 * Backbone.Modules v0.1.4
 * https://github.com/DreamTheater/Backbone.Modules
 *
 * Copyright (c) 2013 Dmytro Nemoga
 * Released under the MIT license
 */
(function () {
    'use strict';

    /**
     * @function
     */
    Backbone.define = function (namespace, callback) {
        var object = window, properties = namespace.split('.'), className = properties.pop();

        _.each(properties, function (property) {
            var proxyObject = object[property];

            if (!proxyObject) {
                proxyObject = object[property] = {};
            }

            object = proxyObject;
        });

        object = object[className] = _.isFunction(callback) ? callback() : object[className];

        object.namespace = namespace;
        object.className = className;

        return object;
    };
}());
