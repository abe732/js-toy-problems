// Make an array method that can return whether or not a context array is a subset of an input array. To simplify the problem, you can assume that both arrays will contain only strings.

Array.prototype.isSubsetOf = function(arr) {
  return isSubsetObjs(this, objectify(arr));
};
var isSubsetObjs = function(arr, obj2) {
  for (var i = 0; i < arr.length; i++) {
    if (!obj2.hasOwnProperty(arr[i])) { 
     return false; 
    }
  } return true;
};
var objectify = function(arr) {
  return arr.reduce(function (out, item) {
    out[item] = true;
    return out;
  }, {})
};