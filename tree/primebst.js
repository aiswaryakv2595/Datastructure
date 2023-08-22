class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
function isPrime(number){
    if(number<=2)
    return true
    else{
        for (let i = 2; i < number/2; i++) {
           if(number%i == 0)
           return false
            
        }
        return true
    }
}
class bst{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(this.root == null)
        this.root = node
        else
        this.insertNode(this.root,node)
       
    }
    insertNode(root,node){
        if(node.value == root.value)
        return
        if(node.value < root.value){
            if(root.left == null)
            root.left = node
            else
            this.insertNode(root.left,node)
        }
        if(node.value > root.value){
            if(root.right == null)
            root.right = node
            else
            this.insertNode(root.right,node)
        }
    }
   findPrime(root){
    const primes = []
    function inOrder(node){
        if(node){
            inOrder(node.left)
        if(isPrime(node.value)){
            primes.push(node.value)
        }
        inOrder(node.right)
        }
    }
    inOrder(root)
    return primes
   }
}
const tree = new bst()
tree.insert(10)
tree.insert(3)
tree.insert(5)
tree.insert(15)
console.log(tree.findPrime(tree.root))
