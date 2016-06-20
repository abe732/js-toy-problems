// Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
// Examples
// Input	Output
// array:
// [ 2, 1, 3, 7 ]	42
// array:
// [ 0, 2, 3 ]	0



function largestProductOfThree (array) {
  // Write your code here, and
  // return your final answer.
  var newArray = array.sort(function(a,b) {
    return a - b;
  });
  var length = newArray.length;
  var countNeg = 0;
  var countPos = 0;
  var absArray = [];
  
  for (var i=0; i<length; i++) {
    if (newArray[i] < 0) {
      countNeg++;
    }
    countPos++;
  }

  
  if (countNeg % 2 && countNeg > 0 && countPos > 2)  {
  	console.log("first one");
  	console.log(countNeg, countPos);
    return (newArray[length-1]) * (newArray[length-2]) * (newArray[length-3]);
  }
  
  else if ((countNeg > 0) && (countPos % 2)) {
  	console.log(countNeg, "this works");
  	console.log(newArray[0]);
  	return ((newArray[0]) * (newArray[1]) * (newArray[2]));
  	
  }
  else {
	  for (var j=0; j<length; j++) {
	  	console.log('is this running?');
	    absArray.push(Math.abs(newArray[j]));
	  }
	  
	  return (absArray[length-1]) * (absArray[length-2]) * (absArray[length-3]);
  }
}
