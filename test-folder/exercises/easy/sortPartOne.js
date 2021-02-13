function bruteForceInsertSort(l, arr) {
  var pivot = arr[l - 1];
  for (let i = l - 1; i >= 0; i--) {
    if (arr[i - 1] > pivot) {
      arr[i] = arr[i - 1];
    }
    if (arr[i - 1] < pivot) {
      debugger;
      arr[i] = pivot;
      console.log(arr.join(' '));
      break;
    }
    if (i === 0)
      arr[i] = pivot;
    console.log(arr.join(' '));
  }
}
//bruteForceInsertSort(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]);
bruteForceInsertSort(5, [2, 4, 6, 8, 3]);
