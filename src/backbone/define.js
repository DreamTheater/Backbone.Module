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
