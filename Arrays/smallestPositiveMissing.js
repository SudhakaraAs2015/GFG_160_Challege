const smallestPositiveMissing = (arr) => {
  arr.sort();
  console.log(arr);
  let res = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === res) {
      res++;
    } else if (arr[i] > res) {
      break;
    }
  }
  return res;
};
console.log(smallestPositiveMissing([2, -3, 4, 1, 1, 7]));
//T.C = O(nlogn)
//S.C = O(n)

// Cycle Sort Approch
// const smallestPositiveMissing = (arr) => {
//   let n = arr.length;

// Place elements at their correct position if they are in range [1, n]
//   for (let i = 0; i < n; ) {
//     const correctIndex = arr[i] - 1;
//     if (
//       arr[i] > 0 &&
//       arr[i] <= n &&
//       arr[i] !== arr[correctIndex]
//     ) {
// Swap arr[i] with arr[correctIndex]
//       [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
//     } else {
//       i++;
//     }
//   }

// Now, find the first place where index + 1 != value
//   for (let i = 0; i < n; i++) {
//     if (arr[i] !== i + 1) {
//       return i + 1;
//     }
//   }

// If all values are in place
//   return n + 1;
// };

// console.log(smallestPositiveMissing([2, -3, 4, 1, 1, 7]));
// T.C = O(n)
//S.C = O(n)

