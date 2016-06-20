// Given a string, return true if it contains balanced parenthesis ().

// Examples
// Input	Output
// string:
// "(x + y) - (4)"	true
// string:
// "(((10 ) ()) ((?)(:)))"	true
// string:
// "(50)("	false
// string:
// ""	true

function isBalanced (string) {
  const string2 = string.replace(/[^(^)]/g, "");
  if (string2[0] === ')') return false;  
  return string2.length % 2 === 0 ? true : false;
}
