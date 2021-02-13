function bruteForceCountSort(arr) {
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
bruteForceCountSort([[0,a], [1,b], [0,c], [1,d]]);
