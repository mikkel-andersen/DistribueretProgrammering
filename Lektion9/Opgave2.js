
function compareSort(compareFn) {
    let resultat = function(list) {
        return list.sort(compareFn);
    }
    return resultat;
}

function compareLen(s1, s2) {
    if (s1.length > s2.length) {
        return 1;
    }
    if (s1.length == s2.length) {
        return 0;
    } else {
        return -1;
    }
}

function compareIgnoreCase(s1, s2) {
    if (s1.toLowerCase() > s2.toLowerCase()) {
        return 1;
    }
    if (s1.toLowerCase() == s2.toLowerCase()) {
        return 0;
    } else {
        return -1;
    }

}

let lenSort = compareSort(compareLen);
let ignoreCaseSort = compareSort(compareIgnoreCase);

let string = ['Mikkel', 'Gris', 'zoo'];

console.log(lenSort(string))
console.log(ignoreCaseSort(string))