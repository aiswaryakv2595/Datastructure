function heapsort(arr){
    buildheap(arr)
}
 function buildheap(arr){
    const n = arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        maxHeapify(arr,n,i)
    }
}
function maxHeapify(arr,n,i){
    let largest = i
    const leftIndex = 2*i+1
    const rightIndex = 2*i+2
    if(leftIndex<n && arr[leftIndex]>arr[largest])
    largest = leftIndex
    if(rightIndex<n && arr[rightIndex]>arr[largest])
    largest = rightIndex

    if(i!=largest){
        [arr[i],arr[largest]] = [arr[largest],arr[i]]
        maxHeapify(arr,n,largest)
    }
}
const arr =[22,4,6,2,55]
heapsort(arr)
console.log(arr);