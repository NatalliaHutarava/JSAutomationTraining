var A = [1, 2, 5, 1, 5, -5, 0, 7, 2, 4, 1, 11, 0, 8, 8, 5, 4, 7, 9, 0];
var AmReps = {
	item: 0,
	count: 0
};
var unique = [];

console.log ('Source array:', A);

for (var i = 0; i < A.length; i++) {
        if (unique.indexOf(A[i]) !== -1) { //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present
            continue;
        }
        unique.push(A[i]);
		AmReps.item = A[i];
		
		for (var k = 0; k < A.length; k++) {
		
			if (A[k] === AmReps.item) {
				AmReps.count = AmReps.count + 1;
			}
		}
	
	console.log ('Amount of repeats:', AmReps);
	AmReps.item = 0;
	AmReps.count = 0;
}


	
	
	




