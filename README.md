<h1 align="center" >My Personal JavaScript Style Guide</h1>
<h6 align="center">(Based from Airbnb's)</h6>

[![npm version](https://badge.fury.io/js/eslint-config-peter.svg)](https://badge.fury.io/js/eslint-config-peter)


To get started:

* `npm i eslint-config-peter`.
* Create an `eslintrc.js` file with the following:

```
module.exports = {
  extends: 'peter',
  rules: {},
};
```

Custom rules go in the `rules` object.

This relies on global installation of `eslint` package, otherwise install locally.
