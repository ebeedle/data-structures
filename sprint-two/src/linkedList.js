var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var length = 0;
  var addedPlaceHolder = 0;
  var removedPlaceHolder = 0;

  list.addToTail = function(value) {
    list.tail = Node(value);
    list[addedPlaceHolder] = Node(value);
    list[addedPlaceHolder].next = addedPlaceHolder + 1;
    if (length === 0) {
      list.head = Node(value);
      list.head.next = addedPlaceHolder + 1;
    }
    addedPlaceHolder++;
    length++;
  };

  list.removeHead = function() {
    removedPlaceHolder++;
    length--;
    delete list[removedPlaceHolder - 1];
    var head = list.head.value;
    if (length > 0) {
      list.head.value = list[removedPlaceHolder].value;
    }
    return head;
  };

  list.contains = function(target) {
    var hashTable = {};
    for (var key in list) {
      hashTable[key] = list[key].value;
    }
    for (var key2 in hashTable) {
      if (hashTable[key2] === target) {
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
