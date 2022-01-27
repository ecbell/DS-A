function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currElement = arr[i]; // 3
        console.log(i);

        for (var j = i - 1; currElement < arr[j] && j >=0; j--) {  // j = 1, 3 < 4 && 1 >=0
            console.log(j);
            arr[j + 1] = arr[j]; // arr[2] = arr[1] => 3 => 4
            console.log(arr);

        }

        arr[j + 1] = currElement; // [-1, 4, 4]
        console.log('two', arr);
    }

    return arr; 
}

module.exports = {
    insertionSort
};


// [-1, 4, 3, 7, 3, 7]

[-1, 4]