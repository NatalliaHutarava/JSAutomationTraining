var a=1;
var b=-2;
var c=1;
var D;
var x1;
var x2;
var St;
var dSt;




if (typeof a!=="number" || typeof b!=="number" || typeof c!=="number") {
	console.log ("Invalid values are  provided for a, b or c. Please provide valid values and try again.");
}

else {
	if (a===0 && b===0 && c===0) {
		St=1;
		console.log ("Your case is #", St);
	}
	if (a!==0 && b!==0 && c===0) {
		St=2;
		console.log ("Your case is #", St);
	}
	if (a!==0 && b===0 && c!==0) {
		St=3;
		console.log ("Your case is #", St);
	}
	if (a!==0 && b===0 && c===0) {
		St=4;
		console.log ("Your case is #", St);
	}
	if (a!==0 && b!==0 && c!==0) {
		St=5;
		console.log ("Your case is #", St);
	}
	if (a===0 && b===0 && c!==0) {
		St=6;
		console.log ("Your case is #", St);
	}


	switch (St) {
		case 1:
		console.log ("0's are provided for a, b, and c. Please provide values and try again.");
		break;
	
		case 2:
		x1=0;
		x2=(-b/a);
		console.log ("Here are the results:");
		console.log ("x1 is ", x1);
		console.log ("x2 is ", x2);
		break;
		
		case 3:
		if ((-c/a)<0) {
			console.log ("There is no possibility to calculate x1 and x2. Please try to use another values for a, b and c");
		}
		else {
			x1=Math.sqrt((-c/a));
			x2=-Math.sqrt((-c/a));
			console.log ("Here are the results:");
			console.log ("x1 is ", x1);
			console.log ("x2 is ", x2);
		}
		break;
	
		case 4:
		x1=0;
		x2=0;
		console.log ("x1 is equal to x2. Here is the result:");
		console.log (x1);
		break;
	
		case 5:
		D=(b^2-4*a*c);
		if (D<0) {
			dSt=1;
		}
		if (D===0) {
			dSt=2;
		}
		if (D>0) {
			dSt=3;
		}
		switch (dSt) {
			case 1:
			console.log ("Discriminant is negative. Please check the values of a, b and c and try again.");
			break;
		
			case 2:
			x1=-b/(2*a);
			x2=-b/(2*a);
			console.log ("x1 is equal to x2. Here is the result:");
			console.log (x1);
			break;
		
			case 3:
			x1=(-b+Math.sqrt(D))/(2*a);
			x2=(-b-Math.sqrt(D))/(2*a);
			console.log ("Here are the results:");
			console.log ("x1 is ", x1);
			console.log ("x2 is ", x2);
			break;
		}
		break;
		case 6:
		console.log ("0's are provided for a and b. Please provide values and try again.");
	
	}	
}




 