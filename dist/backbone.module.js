/**
 * Backbone.Module v0.2.0
 * https://github.com/DreamTheater/Backbone.Module
 *
 * Copyright (c) 2013 Dmytro Nemoga
 * Released under the MIT license
 */
(function (factory) {
    'use strict';

    var isNode = typeof module === 'object' && typeof exports === 'object';

    ////////////////////

    var root = isNode ? {
        _: require('underscore'),
        Backbone: require('backbone')
    } : window;

    ////////////////////

    (isNode ? exports : Backbone).Module = factory(root, isNode);

}(function (root) {
    'use strict';

    var _ = root._, Backbone = root.Backbone;

    ////////////////////

    var Module = Backbone.Module = function (name, callback) {

        ////////////////////

        if (!(this instanceof Module)) {
            return new Module(name, callback);
        }

        ////////////////////

        Module.modules[name] = _.extend(this, { name: name, callback: callback });
    };

    _.extend(Module, {
        modules: {}
    }, {
        define: function (name, callback) {
            return new Module(name, callback);
        },

        require: function (name) {
            var module = Module.modules[name];

            if (!module) {
                throw 'Module "' + name + '" not found';
            }

            return module.extract();
        }
    });

    _.extend(Module.prototype, {
        constructor: Module
    }, {
        extract: function () {
            return this.callback(Module.require);
        }
    });

    return Module;
}));
