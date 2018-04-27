var n = [1, 2, 3, 4, 5, 10];
var m = [];
var i=0;
var k;

k=(n.length-1);
for (k; k>=0; k--, i++ ) {
	m[k]=n[i];
}
console.log ("Reversed massive:", m);
