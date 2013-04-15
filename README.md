[lnk]: https://travis-ci.org/DreamTheater/Backbone.Modules
[img]: https://secure.travis-ci.org/DreamTheater/Backbone.Modules.png

# Backbone.Modules [![Build Status][img]][lnk]
The plugin is for defining modules.

**Dependencies:**

  - [Backbone](https://github.com/documentcloud/backbone) `>= 1.0.0`
  - [Underscore](https://github.com/documentcloud/underscore) `>= 1.4.4`

## Reference API
### Backbone
#### Static members
  - Function `define(namespace, callback)` - Defines a cascade of objects according to dot separated namespace.
    - String `namespace` - Dot separated namespace (e. g. `"foo.bar.baz"`).
    - Function `callback` - Function that returns a value which will be assigned to a latest object in namespace.

## Getting Started
### Define simple objects
```js
Backbone.define('company.application.String', 'Hello, World!');

Backbone.define('company.application.Object', {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz'
});
```

### Define Backbone classes
```js
Backbone.define('company.application.Model', function () {
    return Backbone.Model.extend();
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

    Class.staticProperty = 'staticProperty';

    Class.prototype.prototypeProperty = 'prototypeProperty';

    return Class;
});
```

## Changelog
### 0.1.3
  - Callback-based module definition

### 0.1.2
  - When absent argument `object` method `define` just returns current value

### 0.1.1
  - New usage method

### 0.1.0
  - Initial release
