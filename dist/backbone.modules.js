/**
 * Backbone.Modules v0.1.3
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
        var context = window, names = namespace.split('.'), className = names.pop();

        _.each(names, function (name) {
            var proxy = context[name];

            if (!proxy) {
                proxy = context[name] = {};
            }

            context = proxy;
        });

        context = context[className] = _.isFunction(callback) ? callback() : context[className];

        return context;
    };
}());
