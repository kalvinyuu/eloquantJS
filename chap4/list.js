function arrayToList(array) {
    let list = null;
    for(let i = array.length - 1; i >= 0; i--) {
	list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    let array = []
    for (let node = list; node; node = node.rest) {
	array.push(node.value);
    }
    return array;
}
function Nth(list, N) {
    if (!list) return undefined;
    else if (N == 0) return list.value;
    else return Nth(list.rest, N - 1);
}

function prepend(value, list) {
    return {value, rest: list};
}

console.log(arrayToList([1, 2, 3]))
console.log(listToArray(arrayToList([1, 2, 3])))
console.log(Nth(arrayToList([10, 20, 40, 80]), 3))
console.log(prepend(5, prepend(35, null)))
