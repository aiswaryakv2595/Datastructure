function palindrome(arr){
   let flag 
   for(let i=0;i<arr.length/2;i++){
    if(arr[i]!==arr[arr.length-1-i]){
        flag = false
        break
    }
   else
   flag =true
   }
   return flag
}
console.log(palindrome([1,2,3,3,1]));