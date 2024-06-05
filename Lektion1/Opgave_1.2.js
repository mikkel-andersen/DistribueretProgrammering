// bubbleSort.js
let list = ["a", "c", "d", "b", "p", "k", "q", "z", "i"];

for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j+1];
            list[j + 1] = temp;
        }
    }
}
console.log(list.toString()); // => 0,1,2,4,7,8,9,13,16

function binarySearch(list, x) {
let start = 0; end = list.length - 1;

while (start <= end) {
    let mid = Math.floor((start + end ) / 2);

    if (list[mid] === x) 
        return mid;

    else if (list[mid] < x) 
        start = mid + 1;

    else end = mid - 1;
}
return -1;
}

console.log(binarySearch(list, "p"));