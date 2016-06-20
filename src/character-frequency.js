// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

// Examples
// Input	Output
// string:
// "aaabbc"	[ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// string:
// "mississippi"	[ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// string:
// ""	[ ]

function characterFrequency (string) {
  let storeArr = [];
  let storeObj = {};
  
  for (let i in string) {
    if (!storeObj[string[i]]) {
      storeObj[string[i]] = 1;
    } else {
      storeObj[string[i]] += 1;
    }
  }
  
  for (let key in storeObj) {
    let tuple = [key, storeObj[key]];
    storeArr.push(tuple);
  }
  
  let sorted = storeArr.sort((a,b) => {
    if (b[1] === a[1]) {
      return a[0] < b[0] ? -1 : 1;
    }
    return b[1] - a[1];
  })

  return sorted;
}