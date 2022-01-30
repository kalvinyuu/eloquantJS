let list = {}
let best = []
let N  = 0

let jist = { value: 1, rest: { value: 2, rest: { value: 3, rest: {} } } }
function arrayToList(array) {
    for(let i = array.length - 1; i >= 0; i--) {
	list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray() {
    for (let node = list; node; node = node.rest) {
	best.push(list.value);
    }
    return best;
}
function Nth(N) {
    for (let node = list; node; node = node.rest) {}
}
console.log(arrayToList([1, 2, 3]))
console.log(listToArray(list))
