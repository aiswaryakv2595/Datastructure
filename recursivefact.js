function recFact(n){
    if(n==0)
    return 1;
return n*recFact(n-1)
}
console.log(recFact(1));
console.log(recFact(5));