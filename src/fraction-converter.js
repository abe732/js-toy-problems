// Write a function that takes a number as its argument and returns a string that represents that number’s simplified fraction.
// Whole numbers and mixed fractions should be returned as improper fractions.

// Input	Output
// number:
// 0.5	"1/2"
// number:
// 3	"3/1"
// number:
// 2.5	"5/2"
// number:
// 2.75	"11/4"

function fractionConverter (number) {
  if (number === 0) {
    return '0/1';
  }
  for (var i=1; i; i++) {
  	var temp = number * i;
  	if (!(temp % 1)) {
  	  numerator = temp;
  	  denominator = i;
    return (temp + '/' + i);
  	}
  }
}
// function fractionConverter (number) {
//   if (number === 0) {
//     return '0/1';
//   }

//   var numerator;
//   var demnominator;

//   for (var i=1; i; i++) {
//   	var temp = number * i;
//   	if (!(temp % 1)) {
//   	  numerator = temp;
//   	  denominator = i;
  	  
//   	  subroutine = function (numerator, denominator) {
// 	  	  for (var j=2; j<10; j++) { //make sure the fraction is reduced
// 	  		  var numDiv = numerator / j;
// 	  		  var denomDiv = denominator / j;
// 	  		  if (!(numDiv % 1) && (!denomDiv % 1)) {
// 	  		  	numerator = numDiv;
// 	  	  		denominator = denomDiv;
// 	  		    subroutine(numDiv, denomDiv);
// 	  		  }
// 	  	  }
//   	  };
//   	  subroutine(numerator, denominator);
//       return (numerator + '/' + denominator);
//   	}
//   }
// };

//solution:
var fractionConverter = function(num){
  var denom = 1;
  if(num < 0) { 
    return “-” + toFraction(-num)
  } else {
while(num % 1 !== 0){
  num = num*10; denom = denom*10;
}
  }
  var gcd = 1
  for(var i = num; i > 0; i--){
    if(num%i === 0 && denom%i === 0){
	  gcd = i;
  break;
    }
  }
  return num/gcd + “/” + denom/gcd
};