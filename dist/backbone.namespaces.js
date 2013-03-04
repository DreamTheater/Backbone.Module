/*!
 * Backbone.Namespaces v0.1.1
 * https://github.com/DreamTheater/Backbone.Namespaces
 *
 * Copyright (c) 2013 Dmytro Nemoga
 * Released under the MIT license
 */
(function () {
    'use strict';

    Backbone.define = function (namespace, object) {
        var context = window, names = namespace.split('.'), className = names.pop();

        _.each(names, function (name) {
            var proxy = context[name];

            if (!proxy) {
                proxy = context[name] = {};
            }

            context = proxy;
        });

        context = context[className] = object;

        return context;
    };
}());
