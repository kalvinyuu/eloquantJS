let reverseSequence = []

function reverseArray(sequence){
    for(let i =  sequence.length - 1; i >= 0; i--){
	reverseSequence.push(sequence[i]);
    }
    return reverseSequence;
}
function reverseArrayInPlace(reverseSequence) {
    let returnSequence = []
    for(let i =  reverseSequence.length - 1; i >= 0; i--){
	returnSequence.push(reverseSequence[i]);
    }
    return returnSequence;
}
console.log(reverseArray([1, 6, 2, 8, 5, 9, 12, 0]));
console.log(reverseArrayInPlace(reverseSequence));
