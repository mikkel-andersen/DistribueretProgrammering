let list1 = [1, 3, 4, 6, 8], list2 = [1, 5, 7, 9, 10]

function mergeSort(list1, list2) {
    let list3 = [];

    let i = 0, j = 0;
    while (i < list1.length && j < list2.length) {
        
        if (list1[i] == list2[j]) {
            list3.push(list1[i]);
            list3.push(list2[j]);
            i++;
            j++;
        }

        if (list1[i] < list2[j]) {
            list3.push(list1[i])
            i++;
        } else if (list1[i] > list2[j]) {
            list3.push(list2[j]);
            j++;
        }
    }
    while (i < list1.length) {
        list3.push(list1[i]);
        i++;
    }
    while (j < list2.length) {
        list3.push(list2[j]);
        j++;
    }
    return list3;
}


console.log(mergeSort(list1, list2));
mergeSort(list1, list2).forEach(e => console.log(e))

