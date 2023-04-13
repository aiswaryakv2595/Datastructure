//print array using recursion
function printRecursion(array,n) {
    if(n==0)
    return 
    else{
        printRecursion(array,n-1)
        console.log(array[n-1]);
    }
}
printRecursion([1,3,4,2],4)