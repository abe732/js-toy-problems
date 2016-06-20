// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.
// Examples
// Input	Output
// string:
// "ABCDBIRDUP"	"A"
// string:
// "XXXXXXX"	"sorry"
// string:
// "ALAMABA"	"L"
// string:
// "BABA"	"sorry"

var firstNonRepeatedCharacter= function(string){
  var mem = {}, chr;
  for(var i = 0; i < string.length; i++){
    chr = string[i];
    if(!mem[chr]){
	mem[chr] = 1;
    }else{
	mem[chr]++;
	}
  }
  for(i = 0; i < string.length; i++){
    chr = string[i];
    if(mem[chr] === 1){
	return chr;
	}
  }
  return “sorry”;
};