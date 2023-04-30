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
        else if(node.value < root.value){
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
    closeValue(target){
        let closest = this.root.value
        function traverse(root){
            if(!root)
            return
            if(Math.abs(root.value - target)< Math.abs(closest-target)){
                closest =  root.value
            }
            if(target < root.value){
                traverse(root.left)
            }
            else
            traverse(root.right)
        }
        traverse(this.root)
        return closest
    }
}
const bst = new BST()
bst.insert(10)
bst.insert(15)
bst.insert(14)
bst.insert(5)
console.log(bst.closeValue(13));