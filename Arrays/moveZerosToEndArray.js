const moveZerosToEndArray =(arr)=>{
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]!=0){
            [arr[count],arr[i]] = [arr[i],arr[count]];
            count++;
        }

    }
    return arr;
}

console.log(moveZerosToEndArray([1,2,4,0,5,0,3]));
//TC Big-O = O(n)
//SC Big-O = O(1)


// Moving Zeros Acending Order
const moveZerosAcending= (arr) => {
  const nonZeros = arr.filter((num)=> num!=0).sort((a,b)=>a-b);
//   console.log(nonZeros);
const zeros = arr.length - nonZeros.length;
const finalZeros = Array(zeros).fill(0);
// console.log(finalZeros);
return  [...finalZeros,...nonZeros]
};
console.log(moveZerosAcending([1, 2, 4, 0, 5, 0, 3]));

//TC Big-O = O(n + k log k) → Worst case: O(n log n)
//SC Big-O = 	O(n)