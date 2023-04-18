// bubble sort
function bubblesort(array){
    let n = array.length
for(let i=n;i>0;i--){
    let swapped  // to check whether array is sorted or not
    for(let j=0;j<i-1;j++){
        
        if(array[j] > array[j+1]){
            [array[j],array[j+1]] = [array[j+1],array[j]]
            swapped = true
        }
    }
    if(!swapped)
    break
}
return array
}
console.log(bubblesort([99,1,2,3,5,100]));
// console.log(bubblesort([2,3,2,1,1,5,8,1]));