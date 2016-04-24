var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.root = {};
  obj.root.value = value;
  obj.root.children = {};
  obj.root.children.left = null;
  obj.root.children.right = null;
  return obj;
};

BinarySearchTree.prototype.insert = function(value, node) {
  var currNode = node || this.root;
  //if the value doesn't already exist in tree
  if (!this.contains(value)) {
    //check to see if value is greater than or less than current node
    if (currNode.value < value) {
      //if the left child of the current node doesn't exist, add the value to the node
      if (!currNode.children.left) {
        currNode.children.left.value = value;
      } else {
        //check again
        this.insert(value, currNode.children.left);
      }
    } else {
      if (!currNode.children.right) {
        currNode.children.right.value = value;
      } else {
        this.insert(value, currNode.children.right);
      }
    }
  }
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
  if (currNode.value < value) {
    //check the node's left child's value
    return this.contains(value, currNode.children.left);
  } else {
    return this.contains(value, currNode.children.right);
  }
};

BinarySearchTree.prototype.depthFirstLog = function() {};

/*
 * Complexity: What is the time complexity of the above functions?
 */
