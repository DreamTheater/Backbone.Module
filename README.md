[lnk]: https://travis-ci.org/DreamTheater/Backbone.Namespaces
[img]: https://secure.travis-ci.org/DreamTheater/Backbone.Namespaces.png

# Backbone.Namespaces [![Build Status][img]][lnk]
The plugin is for defining namespaces and classes.

**Dependencies:**

  - [Backbone](https://github.com/documentcloud/backbone) `>= 0.9.10`
  - [Underscore](https://github.com/documentcloud/underscore) `>= 1.4.4`

## Reference API
### Backbone
#### Static members
  - Function `define(namespace, object)`
    - String `namespace`
    - Object `object`

## Getting Started
### Define classes
```js
Backbone.define('company.application.Model', Backbone.Model.extend());

Backbone.define('company.application.Collection', Backbone.Collection.extend({
    model: company.application.Model
}));
```

## Changelog
### 0.1.1
  - New usage method

### 0.1.0
  - Initial release
