var A = [1, 2,-3, -5, 0, -6, 10, -13, -16, 3, 3, 11, 20];
var B = [];
var C = [];
var k = 0;
var l = 0;

for (var i = 0; i < A.length; i++) {

	if (A[i] < 0) {
		C[k] = A[i];
		k++;
	}
	
	else if (A[i] > 0) {
	B[l] = A[i];
	l++;
	
	}
}

console.log ('Source array:', A);
console.log ('> 0 array:', B);
console.log ('< 0 array:', C);