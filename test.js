var assert = require('assert');

const Sourcing = require('.')

const dummySources = {
  'Popeye - I Dont Scare': ['magnet:?xt=urn:btih:1c3b5046f3a39870aac92114dda8c1dc6c519f8b'],
  'Tom & Jerry - Piano Tooners': ['magnet:?xt=urn:btih:0a002f0845fbed9949ef8ae62fc776ae84827687'],
  'Little Lulu - Cad and Caddy': ['magnet:?xt=urn:btih:2035005a6025142dc0a3419e63b83987aa1b0da6'],
};

function dummySourceProvider(q) {
  return Promise.resolve(dummySources[q]);
}

describe('Sourcing', function () {
  it ('should source cartoons: Popeye - I Dont Scare', function(done) {
    const sourcing = new Sourcing();
    sourcing.use(dummySourceProvider);

    sourcing.forTitle("Popeye - I Dont Scare", function(sources) {
      assert.equal(sources[0], 'magnet:?xt=urn:btih:1c3b5046f3a39870aac92114dda8c1dc6c519f8b');
      done();
    });
  });

  it ('should source cartoons: Tom & Jerry - Piano Tooners', function(done) {
    const sourcing = new Sourcing();
    sourcing.use(dummySourceProvider);

    var sources = sourcing.forTitle("Tom & Jerry - Piano Tooners", function(sources) {
      assert.equal(sources[0], 'magnet:?xt=urn:btih:0a002f0845fbed9949ef8ae62fc776ae84827687');
      done();
    })
  });

  it ('should source cartoons: Little Lulu - Cad and Caddy', function(done) {
    const sourcing = new Sourcing();
    sourcing.use(dummySourceProvider);

    var sources = sourcing.forTitle("Little Lulu - Cad and Caddy", function(sources) {
      assert.equal(sources[0], 'magnet:?xt=urn:btih:2035005a6025142dc0a3419e63b83987aa1b0da6');
      done();
    });
  });

  it ('should source something from custom provider', function (done) {
    const sourcing = new Sourcing();
    sourcing.use(function (query) {
      if ('film-name' === query) return Promise.resolve(['magnet-link-abc123']);
      return Promise.resolve([]);
    });

    sourcing.forTitle('film-name', function(sources) {
      assert.equal(sources[0], 'magnet-link-abc123');
      done();
    });
  });

  it ('should source nothing from custom provider', function (done) {
    const sourcing = new Sourcing();
    sourcing.use(function (query) {
      if ('film-name' === query) return Promise.resolve(['magnet-link-abc123']);
      return Promise.resolve([]);
    });

    var sources = sourcing.forTitle('no-such-content', function(sources) {
      assert.equal(sources.length, 0);
      done();
    });
  });

  it ('should source nothing from custom provider that throws', function (done) {
    const sourcing = new Sourcing();
    sourcing.use(function (query) {
      throw new Error("any error");
    });

    var sources = sourcing.forTitle('any-query', function(sources) {
      assert.equal(sources.length, 0);
      done();
    });
  });
});
