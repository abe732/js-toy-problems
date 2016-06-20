// Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

// Input	Output
// arr:
// [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]	2
// arr:
// [ "cat", "dog", "dig", "cat" ]	"cat"

function evenOccurrence (arr) {
  let obj = {};
  
  arr.forEach((item) => {
    obj[item] = obj[item] + 1 || 1;
  });
  
  for (let i in arr) {
    if (obj[arr[i]] % 2 === 0) return arr[i]
  }
  
  return null;
}