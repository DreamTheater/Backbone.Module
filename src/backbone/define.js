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

        if (_.isFunction(callback)) {
            object[className] = callback.call(object);
        }

        object = object[className];

        return object;
    };
}());
