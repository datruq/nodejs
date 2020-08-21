sumDiagonals([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);

sumDiagonalsBest([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);

function sumDiagonals(arr) {
  var sumDiag = 0;
  var sumSecDiag = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        sumDiag += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        sumSecDiag += arr[i][j];
      }
    }
  }
  console.log("la suma es", Math.abs(sumSecDiag - sumDiag));
}

/*
 * best answer
 */
function sumDiagonalsBest(arr) {
  var sumDiag = 0;
  var sumSecDiag = 0;
  for (let i = 0; i < arr.length; i++) {
    var secundaryPosition = getsecundaryDiagonalPosition(arr, i);
    sumDiag += arr[i][i];
    sumSecDiag += arr[i][secundaryPosition];
  }
  console.log("best la suma es", Math.abs(sumSecDiag - sumDiag));
}

function getsecundaryDiagonalPosition(arr, num) {
  return (arr.length - 1) - num;
}
