'use strict';


function Sourcing(args) {
  if (!(this instanceof Sourcing)) return new Sourcing(args);

  this.args = args || {};
  this.providers = this.args['providers'] || [];
}

Sourcing.prototype.use = function(provider) {
  this.providers.push(provider);
  return this;
};

Sourcing.prototype.list = function() {
  return dummySources;
};

Sourcing.prototype.forTitle = function(title, cb) {
  var promises = [];
  for(var i = 0; i < this.providers.length; i++) {
    try {
    promises.push(this.providers[i](title));
    } catch (e) {}
  }

  Promise.all(promises)
    .then( v => {
      if (v === undefined) return;
      var lst = [];
      for(var i = 0; i < v.length; i++) {
	if(v[i] !== undefined) {
	  lst = lst.concat(v[i]);
	}
      }
      cb(lst);
    })
  .catch(err => console.log(err));
};

module.exports = Sourcing;
