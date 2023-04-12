function linearsearch(arr,target){
    for (let index = 0; index < arr.length; index++) {
       if(arr[index]==target){
        return index
       }
        
    }
    return -1
}
console.log(linearsearch([1,2,3,4,5],1));
console.log(linearsearch([1,2,3,4,5],5));
console.log(linearsearch([1,2,3,4,5],6));