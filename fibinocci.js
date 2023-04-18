// Fibinocci series
function fibinocci(n){
  
let fib =[0,1]
if(n<1)
return null
if(n == 1)
return 0
for(let i=2;i<n;i++){
    fib[i] = fib[i-1]+fib[i-2]
}
return fib

}
console.log(fibinocci(0));
console.log(fibinocci(7));