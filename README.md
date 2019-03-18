# esperatv-sourcing

Sourcing video content for EsperaTV

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```
$ npm install esperatv-sourcing 
```

## API

<!-- eslint-disable no-unused-vars -->

```js
var Sourcing = require('esperatv-sourcing')

var sourcing = new Sourcing();

var freeSoftwareProvider = function(query) {
  if ('ubuntu' === query) return Promise.resolve(['magnet:?xt=urn:btih:5a8ce26e8a19a877d8ccc927fcc18e34e1f5ff67']);
  return Promise.resolve([]);
};

sourcing.use(freeSoftwareProvider);

sourcing.forTitle('ubuntu', function(magnets) {
  console.log(magnets);
});

```

## License

[MIT](LICENSE)

