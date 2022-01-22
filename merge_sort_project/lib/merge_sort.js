function merge(array1, array2) {
    let sortedArr = [];

    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] <= array2[0]) {
            sortedArr.push(array1.shift());
        } else {
            sortedArr.push(array2.shift());
        }
    }

    return sortedArr.concat(array1).concat(array2);

}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let mid = Math.floor(array.length / 2); 
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

module.exports = {
    merge,
    mergeSort
};