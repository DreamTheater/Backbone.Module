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

        object = object[className] = _.isFunction(callback) ? callback() : object[className];

        object.namespace = namespace;
        object.className = className;

        return object;
    };
}());
