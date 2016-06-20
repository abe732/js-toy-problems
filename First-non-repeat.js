// Given an arbitrary input string, return the first non-repeating character. 
// For strings with all repeats, return 'sorry'.

//using for-loops

//using recursion
function firstNonRepeatedCharacter (string) {
	var ArraySort = string.toUpperCase().split('').sort();
	
	var recursiveFunc = function () {
		var current = 0;
		var currentItem = ArraySort[current];
		var nextItem = ArraySort[current++];
		
			if (currentItem !== nextItem) {
				console.log(currentItem);
				return currentItem;
			}
			else {
				current++;
				recursiveFunc();
			}
		  }
	return recursiveFunc();
}
		
firstNonRepeatedCharacter("ggstrinng");

//using reduce