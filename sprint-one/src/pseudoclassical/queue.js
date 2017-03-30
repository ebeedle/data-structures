var Queue = function() {
	this.count = 0;
	this.length = 0;
	this.placeholder = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.size = function () {
	return this.length;
}

Queue.prototype.enqueue = function (value) {
	this[this.count] = value;
	this.count++;
	this.length++;
}

Queue.prototype.dequeue = function () {
	if (this.length > 0) {
		this.placeholder++;
		this.length--;
		return this[this.placeholder-1]
	}
}