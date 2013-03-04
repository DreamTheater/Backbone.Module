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
