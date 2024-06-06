//Compare funktioner, der tager to parametre og returnerer -1, 0 eller 1 
//alt efter om den første parametre er mindre end, lig med eller større end den anden parameter

let s1 = "Mikkel", s2 = "Mikkala";
console.log(compare(s1, s2)); // => 1
console.log(compareLen(s1, s2)); // => -1
console.log(compareIgnoreCase(s1, s2)); // => 1

let list = ["Albert", "Calle", "Daniel", "Bastian", "Palle", "Kasper", "Lucas", "Salim", "Ib"];
bubbleSort(list, compare);

function bubbleSort(array, compare) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (compare(array[j], array[j + 1]) > 0) {
                swap(array, j, j + 1);
            }
        }
    }
}
console.log(list.toString()); // => Albert, Bastian, Calle, Daniel, Ib, Kasper, Lucas, Palle, Salim

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function compare(s1, s2) {
    if (s1 > s2) {
        return 1;
    }
    if (s1 == s2) {
        return 0;
    } else {
        return -1
    }
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