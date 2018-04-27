var n=13;
var sum=0;

for (var i=1; i<=n; i++) {
	if (n % i === 0) {
		sum=sum+i;
		console.log (sum);
	}

}
if (sum=== (n+1)) {
	console.log ("Congratulations. Your number is prime: ", n);
}
else {
	console.log ("Unfortunately your number is not prime: ", n);
} 
