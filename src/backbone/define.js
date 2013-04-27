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

        context.namespace = namespace;
        context.className = className;

        return context;
    };
}());
