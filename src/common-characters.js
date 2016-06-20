// Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

// Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

// Example: commonCharacters('acexivou', 'aegihobu')

// Returns: 'aeiou'

commonCharacters = function(string1, string2){
  string1Clean = string1.replace(/ /g,'').toLowerCase();
  string2Clean = string2.replace(/ /g,'').toLowerCase();
  matchArray = [];
  //only store one instance per letter in first
  for (var i=0; i<string1Clean.length; i++) {
    for (var j=0; j<string2Clean.length; j++) {
    	if (string1Clean[i] === string2Clean[j]) {
    		matchArray.push(string1Clean[i]);
    	}
    }
  }
  
  function find_unique_characters( string ){
    var unique='';
    for(var i=0; i<string.length; i++){
        if(unique.indexOf(string[i])==-1){
            unique += string[i];
        }
    }
    return unique;
  }
  
  return find_unique_characters(matchArray.join(''));
};