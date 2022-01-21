function countingSort(arr, max) {
    let results = [];
    let counters = new Array(max + 1).fill(0);

    for (i=0; i<arr.length; i++) {
        counters[arr[i]]++;
    }

    for (let j=0; j<counters.length; j++) {
        while (counters[j] > 0) {
            results.push(j);
            counters[j]--;
        }
    }

    return results;
}


module.exports = {
    countingSort
};