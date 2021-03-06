var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  // your code here

  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(value) {


  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    } else {
      if (this.children[i]) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }  
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 O(n) (Linear) because of for-loop.

 */
