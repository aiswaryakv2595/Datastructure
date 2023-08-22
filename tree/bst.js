class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
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
        if(node.value == root.value)
        return
        if(node.value<root.value){
            if(root.left == null){
                root.left = node
            }
            else{
                this.insertNode(root.left,node)
            }
        }
        else{
            if(root.right == null){
                root.right = node
            }
            else
            this.insertNode(root.right,node)
        }
    }
    search(root,value){
        if(!root)
        return false
         
        else{
            if(root.value == value)
            return true
           else if(value<root.value)
           return this.search(root.left,value)
            else
            return this.search(root.right,value)
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
      }
    deleteNode(root,value){
        if(!root){
          return root
        }else{
          if(value>root.value){
            root.right = this.deleteNode(value,root.right)
          }else if(value < root.value){
            root.left = this.deleteNode(value,root.left)
          }else{
            if(!root.left && !root.right){
              return null 
            }
            if(!root.left){
              return root.right
            }else if(!root.right){
              return root.left
            }
            root.value = this.inorderSuccessor(root.right)
            root.right = this.deleteNode(value,root.right)
          }
        }
        return root
      }
      
      inorderSuccessor(root) {
        while (root.left != null) {
          root = root.left;
        }
        return root;
      }
      
}
const bst = new BinarySearchTree()



bst.insert(12)
bst.insert(5)
bst.insert(3)

console.log(bst);
// console.log(bst.search(bst.root,1));
// console.log(bst.root);
bst.delete(5)

console.log('-----------');
console.log(bst);