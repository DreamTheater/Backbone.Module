(function () {
    'use strict';

    var Class = {
        define: function (namespace, prototype, statics) {
            var object = window, tokens = namespace.split('.'), className = tokens.pop();

            _.each(tokens, function (token) {
                var proxy = object[token];

                if (!proxy) {
                    proxy = object[token] = {};
                }

                object = proxy;
            });

            object = object[className] = this.extend(prototype, statics);

            return object;
        }
    };

    _.extend(Backbone.Model, Class);
    _.extend(Backbone.Collection, Class);
    _.extend(Backbone.Router, Class);
    _.extend(Backbone.History, Class);
    _.extend(Backbone.View, Class);

    Backbone.Class = Class;
}());
