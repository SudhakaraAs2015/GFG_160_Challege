function minimizeTowerDifference(arr, k) {
  let n = arr.length;
  arr.sort((a, b) => a - b); // Step 1: Sort

  let ans = arr[n - 1] - arr[0]; // Initial max difference

  for (let i = 0; i < n - 1; i++) {
    let high = Math.max(arr[i] + k, arr[n - 1] - k);
    let low = Math.min(arr[0] + k, arr[i + 1] - k);

    // Ignore case where height goes negative
    if (low < 0) continue;

    ans = Math.min(ans, high - low);
  }

  return ans;
}

// Example usage:
let arr = [1, 5, 8, 10];
let k = 2;
console.log(minimizeTowerDifference(arr, k)); // Output: 5
// TC = O(n logn)
//SC = O(1)