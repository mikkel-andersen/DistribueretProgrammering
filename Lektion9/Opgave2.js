// Define the compareSort function
function compareSort(compareFn) {
    return function(arr) {
        return arr.sort(compareFn);
    }
}

// Define the compareLen function
function compareLen(a, b) {
    return a.length - b.length;
}

// Define the compareIgnoreCase function
function compareIgnoreCase(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
}

// Generate the lenSort and ignoreCaseSort functions
let lenSort = compareSort(compareLen);
let ignoreCaseSort = compareSort(compareIgnoreCase);

// Test the lenSort and ignoreCaseSort functions
let arr = ['Apple', 'banana', 'Cherry', 'date'];
console.log(lenSort(arr)); // ['Apple', 'date', 'banana', 'Cherry']
console.log(ignoreCaseSort(arr)); // ['Apple', 'banana', 'Cherry', 'date']