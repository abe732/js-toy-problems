// A prime number is an integer greater than 1 that has no divisors other than itself and 1. Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. The grader is looking at the efficiency of your solution (number of operations) as well as correctness! 


// Parameters:


// n (required) - a number.

var primeTester = function(n) {
 // catch edge cases
 if(typeof n !== 'number' || n <= 1 
  || n % 1 !== 0){
   return false;
 }

 // check if n is divisible...
 // by any number from 2 --> sqrt(n)
 for (var i = 2; i <= Math.sqrt(n); i += 1) {
   if (n % i === 0) {
     return false;
   }
 }

 // if no divisors found, n is prime
 return true;
};