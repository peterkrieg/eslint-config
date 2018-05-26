# eslint-config-peter

My personal eslint rules.  Based heavily off of airbnb setup. To get started:

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
