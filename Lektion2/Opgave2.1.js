
function max(array) {
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function contains(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (element === array[i]) {
            return true;
        }
    }
    return false;
}

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let list = [10, 9, 18, 8, 5, 20];

console.log(max(list));
console.log(contains(list, 18));
console.log(sum(list));