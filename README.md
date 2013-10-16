[travis-badge]: https://secure.travis-ci.org/DreamTheater/Backbone.Module.png
[travis-link]: https://travis-ci.org/DreamTheater/Backbone.Module

[gemnasium-badge]: https://gemnasium.com/DreamTheater/Backbone.Module.png
[gemnasium-link]: https://gemnasium.com/DreamTheater/Backbone.Module

# Backbone.Module

[![Build Status][travis-badge]][travis-link]
[![Dependency Status][gemnasium-badge]][gemnasium-link]

Simple module definition tool for Backbone projects.

**Dependencies:**

  - [Backbone](https://github.com/documentcloud/backbone) `>= 1.1.0`
  - [Underscore](https://github.com/documentcloud/underscore) `>= 1.5.2`

## Introduction
This project was created to simplify development and assembly large projects. I implemented it as an alternative to asynchronous module definition. It doesn't use XHR or dependency management mechanism, they're just not needed anymore. The library has very small size and doesn't affect size of production code (about 2KB).

## Getting Started
### Modules definition
You can use one of three available methods to define modules.

Using static constructor.
```js
Backbone.Module(name, callback);
```

Creating new instance of `Backbone.Module`.
```js
new Backbone.Module(name, callback);
```

Using static method `define(name, callback)`.
```js
Backbone.Module.define(name, callback);
```

#### Examples
Simple module without dependencies.
```js
Backbone.Module.define('org.app.Model', function () {
    return Backbone.Model;
});
```

More advanced module with dependencies.
```js
Backbone.Module.define('org.app.Collection', function (require) {
    var Model = require('org.app.Model');

    return Backbone.Collection.extend({
        model: Model
    });
});
```

Actually don't care in which order you define these modules since you pass a callback functions. They will not be executed in moment of definition. That significantly simplifies build procedure of your project. You don't need to take care about concatenation order your scripts, or manage dependencies.

Callback of `org.app.Model` will be called in moment of execution `require('org.app.Model')`.

### Modules requirement
You can get access to modules using static method `require(name)`.
```js
var Collection = Backbone.Module.require('org.app.Collection');
```

Callback of `org.app.Collection` will be called and you will get returned value.

## Changelog
### 0.2.0
  - Completely new plugin's design
  - Dependency injection

### 0.1.8
  - Renaming project from `Backbone.Modules` to `Backbone.Module`
  - Function `Backbone.define` is now a class `Backbone.Module`
  - Added CommonJS support

### 0.1.5
  - Revert 0.1.4 changes

### 0.1.4
  - Modules have static properties `namespace` and `className`

### 0.1.3
  - Callback-based module definition

### 0.1.2
  - When absent argument `object` function `define` just returns current value

### 0.1.1
  - New usage method

### 0.1.0
  - Initial release
