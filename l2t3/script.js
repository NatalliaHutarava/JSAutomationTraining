var A = [1, 2, 5, 1, 5, -5, 0, 7, 2, 4, 1, -11, 0, 8, 8, 5, 4, 7, 9, 0, -5, -3, 0, -11];
var B = [];
var C = [];
var keys;

console.log ('Source array:', A);

B = A.filter(function(number) {
 return number > 0;
});
console.log ('Positive array:', B); 

C = A.filter(function(number) {
 return number < 0;
});
console.log ('Negative array:', C); 

function unique(a) {
  var AmReps = {};

  for (var i = 0; i < A.length; i++) {
    var str = A[i];
    AmReps[str] = true; 
  }

  return Object.keys(AmReps); 
}
console.log ('unique elements', ( unique(A) )); 

