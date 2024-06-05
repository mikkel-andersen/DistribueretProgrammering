
let array = [1, 2, 3, 4, 5]

let f = function max(array) {
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

let g =
    function contains(array, element) {
        for (let i = 0; i < array.length; i++) {
            if (element == array[i]) {
                return true;
            }
        }
        return false;
    }

let h =
    function sum(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === 'number') { 
                sum += array[i];
            }
        }
        return sum;
    };

    
array.push(f);
array.push(g);
array.push(h);    
console.log(array[5](array));
console.log(array[6](array, 3));
console.log(array[7](array));