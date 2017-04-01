

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    var indexArray = this._storage.get(index)
    if (indexArray.indexOf(k) !== -1) {
	    for (var i = 0; i < indexArray.length; i++) {
	    	if (indexArray[i] === k) {
	    		indexArray[i + 1] = v;
	    	}
	    }
    } else {
      this._storage.set(index, indexArray.concat(k, v));
    }
  } else {
  	this._storage.set(index, [k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage.get(index);
  var targetVal;
  console.log(storage);
  if (storage.length) {
	  for (var i = 0; i < storage.length; i++) {
	    if (storage[i] === k) {
	  	  targetVal = storage[i + 1]
	  	  return targetVal;
	    }
	  }
	  
  }
  return undefined
}
  /*
  this._storage.each(storage, function(val, index, storage) {
  	if (val === k) {
  	  targetVal = storage[1][index+1];
  	}
  });
  return targetVal;
};
*/     


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, []);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


