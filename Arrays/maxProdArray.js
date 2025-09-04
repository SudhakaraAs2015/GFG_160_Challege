// Brute Force Approach
const maxProdArray = (arr) => {
  let currMin = arr[0];
  let currMax = arr[0];
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let temp = Math.max(arr[i], currMax * arr[i], currMin * arr[i]);
    currMin = Math.min(arr[i], currMax * arr[i], currMin * arr[i]);
    currMax = temp;
    res = Math.max(res, currMax);
  }
  return res;
};
console.log(maxProdArray([-2, 6, -3, -10, 0, 2]));

//T.C = O(n)
// S.C = O(1)
