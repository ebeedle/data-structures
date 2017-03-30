var Queue = function() {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var placeHolder = 0;
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[count] = value;
    count++;
    length++;
  };

  someInstance.dequeue = function() {
    if (length > 0) {
      length--;
      var remove = someInstance[placeHolder];
      placeHolder++;
      return remove;
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
