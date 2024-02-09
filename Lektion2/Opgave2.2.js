// bubbleSort.js
let list = [7,13,9,8,4,1,2,16,0];


function bubbleSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

bubbleSort(list);
console.log(list.toString()); // => 0,1,2,4,7,8,9,13,16

function binarySearch(list, x) {
    let start = 0; end = list.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (list[mid] === x)
            return mid;

        else if (list[mid] < x)
            start = mid + 1;

        else end = mid - 1;
    }
    return -1;
}

console.log(binarySearch(list, "p"));