// Implement a function that sorts an array of numbers using the “mergesort” algorithm.

// Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
// after the first merge, and so on.)

// This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.

var mergeSort = function(array) {
  // Arrays that are [] or [x] are already sorted, so we can just return them.
  if (array.length <= 1) { return array; }
​
  // Split the array into two halves.
  var half = Math.floor(array.length / 2);
  var left = array.slice(0, half);
  var right = array.slice(half);
​
  // Sort both halves, then merge them together.
  return merge(mergeSort(left), mergeSort(right));
};
​
​
var merge = function (left, right) { // pass in an array of two sorted arrays
  var i = 0, j = 0, result = []; // initialize our counters
  // While there is something left in both arrays to push to `result`...
  while (i < left.length && j < right.length) {
    // ...push the smaller of the two
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  // One array is already pushed to result,
  // so add the rest of the other array
  var remaining = i === left.length ? right.slice(j) : left.slice(i);
  return result.concat(remaining);
};