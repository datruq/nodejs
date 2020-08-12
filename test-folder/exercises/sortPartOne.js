const bruteForceInsertSort = (l, arr) => {
    var pivot = arr[l - 1];
    for (let i = l - 2; i > -1; i--) {
        if (arr[i] > pivot) {
            arr[i + 1] = arr[i];
        }
        if (arr[i] < pivot) {
            arr[i + 1] = pivot;
            console.log(arr.join(' '));
            break;
        }
        console.log(arr.join(' '));
    }
};
bruteForceInsertSort(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]);
