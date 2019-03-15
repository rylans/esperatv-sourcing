'use strict';

const dummySources = {
  'Popeye - I Dont Scare': ['magnet:?xt=urn:btih:1c3b5046f3a39870aac92114dda8c1dc6c519f8b'],
  'Tom & Jerry - Piano Tooners': ['magnet:?xt=urn:btih:0a002f0845fbed9949ef8ae62fc776ae84827687'],
  'Little Lulu - Cad and Caddy': ['magnet:?xt=urn:btih:2035005a6025142dc0a3419e63b83987aa1b0da6'],
};

function Sourcing(args) {
  if (!(this instanceof Sourcing)) return new Sourcing(args);

  this.args = args || {};
  this.providers = this.args['providers'] || [];
}

Sourcing.prototype.list = function() {
  return dummySources;
};

Sourcing.prototype.forTitle = function(title) {
  var src = dummySources[title];
  if (src === undefined) return [];
  return src;
};

module.exports = Sourcing;
