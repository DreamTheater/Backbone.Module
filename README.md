[lnk]: https://travis-ci.org/DreamTheater/Backbone.Classes
[img]: https://secure.travis-ci.org/DreamTheater/Backbone.Classes.png

# Backbone.Classes [![Build Status][img]][lnk]
The plugin is for defining namespaces and classes.

**Dependencies:**

  - [Backbone](https://github.com/documentcloud/backbone) `>= 0.9.10`
  - [Underscore](https://github.com/documentcloud/underscore) `>= 1.4.4`

## Reference API
### Backbone.Class
#### Static members
  - Function `define(namespace, prototype, statics)`
    - String `namespace`
    - Object `prototype`
    - Object `statics`

## Getting Started
### Define classes
```js
Backbone.Model.define('company.application.Model');

Backbone.Collection.define('company.application.Collection', {
    model: company.application.Model
});
```

## Changelog
### 0.1.0
  - Initial release
