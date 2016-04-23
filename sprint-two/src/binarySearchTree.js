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

BinarySearchTree.prototype.contains = function(value, aNode) {
  var currNode = aNode || this.root;
  if (currNode.value === value) {
    return true;
  } 
  if (!currNode.children.left && !currNode.children.right) {
    return false;
  }
  //if the current node's value is less than the value being passed in

  //check the node's left child's value
};

BinarySearchTree.prototype.depthFirstLog = function() {};

/*
 * Complexity: What is the time complexity of the above functions?
 */
