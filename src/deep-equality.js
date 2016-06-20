// Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

// DO NOT use JSON.stringify.

deepEquals = function(a, b){
  //shallow equality
	if (a === b) {
	  return true;
	}
	else {
		
      var aProp = Object.getOwnPropertyNames(a);
      var bProp = Object.getOwnPropertyNames(b);
      console.log(aProp);
      
      if (aProp.length !== bProp.length) {
      	console.log('got to length equals');
        return false;
      }
      
      for (var i=0; i<aProp.length; i++) {
        var propName = aProp[i];
        if (Object.getOwnPropertyNames(a[propName]).length > 1) {
          deepEquals(a[propName], b[propName]);
        }
      }
      
      return true;
	}
  console.log('stayed outer');

  return false;
  
};

//solution:
var deepEquals = function(apple, orange){
 if(apple === orange) { return true; }
 if(!orange || !apple) { return false; }
 if(!(apple.constructor === Object) || !(orange.constructor === Object)) { return false; }
 var appleKeys = Object.keys(apple);
 var orangeKeys = Object.keys(orange);
 if(appleKeys.length !== orangeKeys.length) { return false; }
 if(appleKeys.length === 0) { return true; }
 for(var key in apple){
   if(!deepEquals(apple[key], orange[key])) { return false; }
 }
 return true;
};