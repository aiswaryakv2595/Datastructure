//reverse array
function reverse(arr){
    let i=0
    let n= arr.length-1
    let temp
    while(i<=n){
        temp = arr[i]
        arr[i] = arr[n]
        arr[n] = temp
        i++
        n--
    }
    return arr
  }
  console.log(reverse([1,2,3]))