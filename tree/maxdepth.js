class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
function isPrime(number){
    if(number <= 2)
    return true
    else{
        for(let i=2;i<=number;i++){
            if(number % i == 0)
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
    findPrimes(root) {
        const primes = [];

        function inOrder(node) {
            if (node) {
                inOrder(node.left);
                if (isPrime(node.value)) {
                    primes.push(node.value);
                }
                inOrder(node.right);
            }
        }

        inOrder(root);

        return primes;
    }
    maxDepth(root){
        if(root == null)
        return 0
        else{
            const leftDepth = this.maxDepth(root.left)
            const rightDepth = this.maxDepth(root.right)
            if(leftDepth > rightDepth)
            return (leftDepth+1)
            else
            return (rightDepth+1)
        }
    }
    identicalTree(tree1,tree2){
        if(tree1 == null && tree2 == null )
        return true
        if(tree!= null && tree2!=null){
            return(tree1.value === tree2.value &&
                 this.identicalTree(tree1.left,tree2.left)&&
                 this.identicalTree(tree2.right,tree2.right))
        }
        return false
    }
    largest(root){
        if(root == null)
        return null
        else{
            if(!root.left && !root.right)
            return root.value
            if(this.largest(root.left) > this.largest(root.right)){
                return this.largest(root.left)
            }
            else
            return this.largest(root.right)
        }
    }
    
}
const tree = new bst()
tree.insert(20)
tree.insert(10)
tree.insert(2)
tree.insert(25)
console.log(tree)
console.log(tree.maxDepth(tree.root))
console.log(tree.largest(tree.root))
console.log('prime')
console.log(tree.findPrimes(tree.root))
const tree1 = new bst()
tree1.insert(20)
tree1.insert(10)
tree1.insert(2)
tree1.insert(25)
console.log(tree.identicalTree(tree.root,tree1.root))