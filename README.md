[npm-badge]: https://badge.fury.io/js/backbone.modules.png
[npm-link]: https://badge.fury.io/js/backbone.modules

[travis-badge]: https://secure.travis-ci.org/DreamTheater/Backbone.Modules.png
[travis-link]: https://travis-ci.org/DreamTheater/Backbone.Modules

# Backbone.Modules [![NPM Version][npm-badge]][npm-link] [![Build Status][travis-badge]][travis-link]
The plugin is for defining modules. It will help you to define modules with long namespaces in global scope.

**Dependencies:**

  - [Backbone](https://github.com/documentcloud/backbone) `>= 1.0.0`
  - [Underscore](https://github.com/documentcloud/underscore) `>= 1.5.1`

## Getting Started
Backbone.Modules is a simple helper that automatically resolves creation nested contexts, avoiding errors.

### Define simple objects
```js
Backbone.define('company.application.String', function () {
    return 'Hello, World!';
});

Backbone.define('company.application.Object', function () {
    return {
        foo: 'foo',
        bar: 'bar',
        baz: 'baz'
    };
});
```

### Define Backbone classes
```js
Backbone.define('company.application.Model', function () {
    return Backbone.Model;
});

Backbone.define('company.application.Collection', function () {
    return Backbone.Collection.extend({
        model: company.application.Model
    });
});
```

### Define custom class
```js
Backbone.define('company.application.Class', function () {
    var Class = function () {
        this.instanceProperty = 'instanceProperty';
    };

    _.extend(Class, {
        staticProperty: 'staticProperty'
    });

    _.extend(Class.prototype, {
        prototypeProperty: 'prototypeProperty'
    });

    return Class;
});
```

## Changelog
### 0.1.4
  - Modules have static properties `namespace` and `className`

### 0.1.3
  - Callback-based module definition

### 0.1.2
  - When absent argument `object` method `define` just returns current value

### 0.1.1
  - New usage method

### 0.1.0
  - Initial release
