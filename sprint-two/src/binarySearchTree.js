var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.root = {};
  obj.root.value = value;
  obj.root.children = {};
  obj.root.children.left = null;
  obj.root.children.right = null;
  return obj;
};

BinarySearchTree.prototype.insert = function(value) {
  
};

BinarySearchTree.prototype.contains = function(value, currNode) {
  var currNode = currNode || this.root;
  if (currNode.value === value) {
    return true;
  } else if ( value < this.root.value ) {
    currNode.children.left.value === value;
  }
};

BinarySearchTree.prototype.depthFirstLog = function() {};

/*
 * Complexity: What is the time complexity of the above functions?
 */
