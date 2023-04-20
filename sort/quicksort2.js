function quicksort(arr,left = 0, right = arr.length-1){
    if(left<right){  //--base case
        let pivot = partiton(arr,left,right)
        quicksort(arr,left,pivot-1)
        quicksort(arr,pivot+1,right)
    }
   
    return arr
}
function partiton(arr,left,right){
    let pivot = arr[right]
    let i = left
    for(let j=left;j<right;j++){
        if(arr[j]<pivot){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            i++
        }
    }
    [arr[i],arr[right]] = [arr[right],arr[i]]
    return i
}
console.log(quicksort([9,6,4,2,7,4]));