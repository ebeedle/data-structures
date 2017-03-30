var Queue = function() {
  var store = {};
  store.count = 0;
  store.placeholder = 0;
  store.length = 0;
  extend(store, queueMethods);
  return store;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
	this[this.count] = value;
	this.count++;
	this.length++;
}

queueMethods.dequeue = function() {
	this.placeholder++;
	if (this.length > 0) {
		var out = this[this.placeholder - 1]
		this.length--;
		return out;
	}
}

queueMethods.size = function() {
	return this.length;
}