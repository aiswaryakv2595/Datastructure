class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(this.root == null){
            this.root = node
        }
        else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(root == node)
        return
        if(node.value < root.value){
            if(root.left == null)
            root.left = node
            else
            this.insertNode(root.left,node)
        }
        else{
            if(root.right == null)
            root.right = node
            else
            this.insertNode(root.right,node)
        }
    }
}
const bst = new BST()
bst.insert(25)
bst.insert(20)
bst.insert(10)
console.log(bst);