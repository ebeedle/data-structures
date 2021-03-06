var Stack = function() {
	var store = {};
	store.count = 0
	extend(store, stackMethods);
	return store;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods = {};

stackMethods.size = function () {
	return this.count;
}

stackMethods.push = function(value) {
  this[this.count] = value;
  this.count++;
}

stackMethods.pop = function() {
	if (this.count > 0) {
		this.count--;
	return this[this.count];
	}
}