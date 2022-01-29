let value = 0;
let sequence = [];
function range(start, end, operator) {
    if(operator > 0) {
	for (start; start <= end; start += operator) {
	    sequence.push(start);
	}
    }
    else {
	for(start; start >= end; start += operator) {
	    sequence.push(start);
	    
	}
    }
    return sequence;
}
function sum(sequence) {
    for(let i = 0; i < sequence.length; i++){
	value += sequence[i];
    }
    return value;
}

console.log(range(5, -7, -1));
console.log(sum(sequence));
