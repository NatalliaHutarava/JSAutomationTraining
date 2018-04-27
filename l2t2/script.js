var A = [1, 2, 5, 1, 5, -5, 0, 7, 2, 4, 1, 11, 0, 8, 8, 5, 4, 7, 9, 0];
//var B = [];
//var C = [];
var i = 0;
var count = 0;
var numb = 0;
//var m = 0;
//var n = 0;

console.log ('Source array:', A);

for (i; i < A.length; i++) {
	numb = A[i];
	for (var k = 0; k < A.length; k++) {
		if (A[k] === numb) {
			count = count + 1;
		}
	}
	console.log ('Member: ', numb, 'Number of repeats: ', count);
	//B[m] = numb;
	//C[n] = count;
	
	//console.log ('Member: ', B[m], 'Number of repeats: ', C[n]);
	//m++;
	//n++;
	count = 0;
}