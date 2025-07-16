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