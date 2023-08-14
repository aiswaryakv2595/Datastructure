class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    buildTree(nodes) {
      let idx = 0;
  
      const buildNode = () => {
        if (nodes[idx] === -1) {
          return null;
        }
  
        const newNode = new Node(nodes[idx]);
        idx++;
        newNode.left = buildNode();
        idx++;
        newNode.right = buildNode();
  
        return newNode;
      };
  
      this.root = buildNode();
    }
  }
  
  const nodes = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];
  const tree = new BinaryTree();
  tree.buildTree(nodes);
  console.log(tree.root.value);
  