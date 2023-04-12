function recursiveFibinocci(n){
if(n<2)
return n
return recursiveFibinocci(n-1)+recursiveFibinocci(n-2)
}
function printFibonacciSeries(n, i = 0) {
    if (i < n) {
      console.log(recursiveFibinocci(i));
      printFibonacciSeries(n, i + 1);
    }
  }
printFibonacciSeries(6);