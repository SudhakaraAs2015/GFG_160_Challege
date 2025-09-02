//Kadane's Algorithm
//[2, 3, -8, 7, -1, 2, 3] = 11
function maxSubArray(arr) {
  let maxEnding = arr[0];
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEnding = Math.max(maxEnding + arr[i], arr[i]);
    console.log(maxEnding);
    res = Math.max(res, maxEnding);
  }
  return res;
}
console.log(maxSubArray([2, 3, -8, 7, -1, 2, 3]));
//T.C = O(n)
//S.C = O(n)
// Printing SubArray
// function maxSubArray(arr) {
//   let maxEnding = arr[0];
//   let res = arr[0];

//   let start = 0;
//   let end = 0;
//   let s = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxEnding + arr[i]) {
//       maxEnding = arr[i];
//       s = i;
//     } else {
//       maxEnding = maxEnding + arr[i];
//     }

//     if (maxEnding > res) {
//       res = maxEnding;
//       start = s;
//       end = i;
//     }
//   }

//   console.log("Max Subarray Sum:", res);
//   console.log("Subarray:", arr.slice(start, end + 1));
//   return res;
// }
