[npm-badge]: https://badge.fury.io/js/backbone.modules.png
[npm-link]: https://badge.fury.io/js/backbone.modules

[travis-badge]: https://secure.travis-ci.org/DreamTheater/Backbone.Modules.png
[travis-link]: https://travis-ci.org/DreamTheater/Backbone.Modules

[gemnasium-badge]: https://gemnasium.com/DreamTheater/Backbone.Modules.png
[gemnasium-link]: https://gemnasium.com/DreamTheater/Backbone.Modules#tab-dev_dependencies

# Backbone.Modules

[![NPM Version][npm-badge]][npm-link]
[![Build Status][travis-badge]][travis-link]
[![Dependency Status][gemnasium-badge]][gemnasium-link]

Utility for modules definition.

**Dependencies:**

  - [Backbone](https://github.com/documentcloud/backbone) `>= 1.0.0`
  - [Underscore](https://github.com/documentcloud/underscore) `>= 1.5.1`

## Getting Started
`Backbone.define()` is a simple helper that automatically resolves creation of nested scopes.

### Define simple object
You can easy define any variables, like this:
```js
Backbone.define('foo.bar.object', { foo: 'bar' });
```
```js
Backbone.define('foo.bar.object', function () {
    return { foo: 'bar' };
});
```

Both of these statements are equal. They will create the object in global scope: `window.foo.bar.object`.

### Define Backbone's classes
A little example how `Backbone.Modules` can be used together with Backbone's classes:
```js
Backbone.define('org.app.Model', function () {
    return Backbone.Model;
});
```
```js
Backbone.define('org.app.Collection', function () {
    return Backbone.Collection.extend({
        model: org.app.Model
    });
});
```

## Changelog
### 0.1.5
  - Revert 0.1.4 changes

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
