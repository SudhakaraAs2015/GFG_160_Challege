const reverseArray =(arr)=>{
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left ++;
        right --;
    }
    return arr;
};
console.log(reverseArray([2,3,1,4,5,0,5]));
// Time Complexity Big-O = O(n)
// Space Complexity Big-O = O(1);