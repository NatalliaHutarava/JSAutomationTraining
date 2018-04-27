var n=15;
var sum=0;

for (var i=0; i<n; i++) {
	sum = sum + (1/(1+i));
}
console.log ("Sum of 1+ 1/2+...+1/",n);
console.log ("is ", sum);