/*function deepEqual(a, b) {
    if(typeof a == b && != null) {
	(a.keys === b.keys);
	return true;}
    
    else return false;
    }*/

let obj = {value: {is: "an"}, object: 2};

function equal(obj, compare) {
    obj == compare;
}
return equal();
console.log(equal(obj, {value: {is: "an"}, object: 2}))
