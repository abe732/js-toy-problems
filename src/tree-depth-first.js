// Implement a depth-first method on a tree class.

// DFSelect accepts a filter function, calls that function on each of the nodes in Depth First order, and returns a flat array of node values of the tree for which the filter returns true.

// Example:

// var root1 = new Tree(1);
// var branch2 = root1.addChild(2);
// var branch3 = root1.addChild(3);
// var leaf4 = branch2.addChild(4);
// var leaf5 = branch2.addChild(5);
// var leaf6 = branch3.addChild(6);
// var leaf7 = branch3.addChild(7);

// root1.DFSelect(function (value, depth) {
//   return value % 2 === 1;
// }) //=> [1, 5, 3, 7]

// root1.DFSelect(function (value, depth) {
//   return depth === 1;
// }) //=> [2, 3]

var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function(filter) {      
  var filteredArray = [];
  var nodeDepth = 0;
  
  //need recursion. start at root and test. mark as tested. Base case
  function depthRecursion (node) {
    if (filter(node.value, nodeDepth)) {
      filteredArray.push(node.value);
    }
    
    for (var i=0; i<node.children.length; i++) {
      nodeDepth++;
      depthRecursion(node.children[i]);
    }
    nodeDepth--;

  };
  
  depthRecursion(this);
  
  return filteredArray;
};
  //if child, test child. mark as tested. Recurse down.
  
  //at end of path, go back one level to parent. 
    //If has child that is not tested, test. mark complete. recurse.
  
  //at end of path do same as previous step: go back up parent.
  
  //if no children not tested, go back up level.
  
  //will finish back up at root.
  
//   if (filter(root)) {
//     filteredArray.push(root);
//   }
  
//   this.children.forEach(function(node) {
//     if (!visited[node]) {
//       node.visited = true;
//       if (filter(node)) {
//         filteredArray.push(node);
//       }
//     }
//   });
  
//   return filteredArray;
  
// };

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
