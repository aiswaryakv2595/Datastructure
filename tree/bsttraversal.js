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
        if(root.value == node.value)
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
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
       
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left)
            queue.push(curr.left)
            if(curr.right)
            queue.push(curr.right)
        }
    }
     deleteNode(root, val) {
        if (root.value > val) {
          root.left = this.deleteNode(root.left, val);
        } else if (root.value < val) {
          root.right = this.deleteNode(root.right, val);
        } else { // root.data == val
          // case 1
          if (root.left == null && root.right == null) {
            return null;
          }
          // case 2
          if (root.left == null) {
            return root.right;
          } else if (root.right == null) {
            return root.left;
          }
          // case 3
          const IS = this.inorderSuccessor(root.right);
          root.value = IS.value;
          root.right = this.deleteNode(root.right, IS.value);
          return root;
        }
      }
      
       inorderSuccessor(root) {
        while (root.left != null) {
          root = root.left;
        }
        return root;
      }
      printrange(root, x, y) {
        if (root) {
          if (x <= root.value && y >= root.value) {
            this.printrange(root.left, x, y);
            console.log(root.value);
            this.printrange(root.right, x, y);
          } else if (x >= root.value) {
            this.printrange(root.right, x, y);
          } else {
            this.printrange(root.left, x, y);
          }
        }
      }

      search(root,min = null, max = null){
        if(!root)
        return true
         
        if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) {
            return false;
          }
          const leftValid = this.search(root.left, min, root.value);
          const rightValid = this.search(root.right, root.value, max);

    return leftValid && rightValid;
    }
      
  findClosestValue(target) {
    let closestValue = this.root.value;

    function traverse(root) {
      if (!root) {
        return;
      }

      if (Math.abs(root.value - target) < Math.abs(closestValue - target)) {
        closestValue = root.value;
      }

      if (target < root.value) {
        traverse(root.left);
      } else {
        traverse(root.right);
      }
    }

    traverse(this.root);
    return closestValue;
  }

}
const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)
console.log('preorder');
tree.preOrder(tree.root)
console.log('inorder');
tree.inOrder(tree.root)
console.log('postorder');
tree.postOrder(tree.root)

// console.log(tree.findClosestValue(6));
console.log(tree.search(tree.root));