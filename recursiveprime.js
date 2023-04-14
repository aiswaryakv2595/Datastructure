function recursiveprime(n,i=2) {
    if(n == 2)
    return true
    if(n*i == 0)
    return false
    if(i*i > n)
    return true
    return recursiveprime(n,i+1)
}
console.log(recursiveprime(5));