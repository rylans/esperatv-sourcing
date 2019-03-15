var assert = require('assert');

const Sourcing = require('.')

describe('Sourcing', function () {
  it ('should source cartoons: Popeye - I Dont Scare', function() {
    const sourcing = new Sourcing();
    var sources = sourcing.forTitle("Popeye - I Dont Scare");
    assert.equal(sources.length, 1);
    assert.equal(sources[0], 'magnet:?xt=urn:btih:1c3b5046f3a39870aac92114dda8c1dc6c519f8b');
  });

  it ('should source cartoons: Tom & Jerry - Piano Tooners', function() {
    const sourcing = new Sourcing();
    var sources = sourcing.forTitle("Tom & Jerry - Piano Tooners");
    assert.equal(sources.length, 1);
    assert.equal(sources[0], 'magnet:?xt=urn:btih:0a002f0845fbed9949ef8ae62fc776ae84827687');
  });

  it ('should source cartoons: Little Lulu - Cad and Caddy', function() {
    const sourcing = new Sourcing();
    var sources = sourcing.forTitle("Little Lulu - Cad and Caddy");
    assert.equal(sources.length, 1);
    assert.equal(sources[0], 'magnet:?xt=urn:btih:2035005a6025142dc0a3419e63b83987aa1b0da6');
  });

  it ('should source all cartoons', function() {
    const sourcing = new Sourcing();
    var allSources = sourcing.list();
    assert.equal(allSources['Little Lulu - Cad and Caddy'][0], 'magnet:?xt=urn:btih:2035005a6025142dc0a3419e63b83987aa1b0da6');
  });

});
