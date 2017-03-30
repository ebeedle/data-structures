var LinkedList = function() {
  var list = {};
  list.head = {};
  list.tail = {};
  var length = 0;
  var addedPlaceHolder = 0;
  var removedPlaceHolder = 0;

  list.addToTail = function(value) {
    list.tail.value = value;
    list[addedPlaceHolder] = value;
      if (length === 0) {
        list.head.value = value;
      }
    addedPlaceHolder++;
    length++;
    };

  list.removeHead = function() {
    removedPlaceHolder++;
    length--;
    delete list[removedPlaceHolder - 1]
    var head = list.head.value;
    list.head.value = list[removedPlaceHolder];
    return head;
  };

  list.contains = function(target) {
    for (var key in list) {
      if (list[key] === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
   O(n) (Linear) because of for-in loop
 */
