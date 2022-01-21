function binarySearch(array, target) {
    if (array.length < 1) return false;

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid + 1);

    if (array[mid] === target) {
        return true;
    } else if (array[mid] > target) {
        return binarySearch(left, target);
    } else {
        let search = binarySearch(right, target);
        return search === false ? false : true;
    }
}

function binarySearchIndex(array, target) {
    if (array.length < 1) return -1;

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid + 1); 

    if (array[mid] === target) {
        return mid;
    } else if (array[mid] > target) {
        return binarySearchIndex(left, target);
    } else {
        let search = binarySearchIndex(right, target);
        return search === -1 ? -1 : search + mid + 1
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};