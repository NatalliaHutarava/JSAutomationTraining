var A = [1, 2,-3, -5, 0, -6, 10, -13, -16, 3, 3, 11, 20];
var B = [];
var C = [];

console.log ('Source array:', A);

B = A.filter(function(number) {
 return number > 0;
});
console.log ('Positive array:', B); 

C = A.filter(function(number) {
 return number < 0;
});
console.log ('Negative array:', C); 
