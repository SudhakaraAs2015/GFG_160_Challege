const rotateArray =(arr,k)=>{
    let n = arr.length;
    k= k%n;

    reverseArray(arr,0,k-1);
    reverseArray(arr,k,n-1);
    reverseArray(arr,0,n-1);
      return arr;
}

const reverseArray =(arr,start,end)=>{
while(start<end){
    [arr[start],arr[end]] = [arr[end],arr[start]];
    start++;
    end --;
}

}
console.log(rotateArray([1,2,3,4,5],2));
//T.C = Big-O = O(n)
//S.C = Big-O = O(1)
