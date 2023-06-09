// Quick Sort
function quicksort(arr) {
    if(arr.length<=1){
        return arr
    }  // since this is a recursive function, we have to put base condition to stop infinite calling function
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
  for(let i = 0;i<arr.length-1;i++){
    if(arr[i]<pivot){
        left.push(arr[i])
    }
    else{
        right.push(arr[i])
    }
  }
  return [...quicksort(left),pivot,...quicksort(right)]
}
console.log(quicksort([4,6,-2,15,9,0]));