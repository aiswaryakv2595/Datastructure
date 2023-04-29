class Node{
    constructor(){
        this.children = {}
        this.isWordEnd = false
    }
}
class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let curr = this.root
        for(let i = 0; i<word.length;i++){
            let charToInsert = word[i]
            if(!(charToInsert in curr.children)){
                curr.children[charToInsert] = new Node()
            }
            curr = curr.children[charToInsert]
        }
        curr.isWordEnd = true
    }
    search(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let charToFind = word[i]
            if(!(charToFind in curr.children)){
                return false
            }
            curr = curr.children[charToFind]
           
        }
        return curr.isWordEnd
    }
    startWithprefix(prefix){
        let curr = this.root
        for(let i=0;i<prefix.length;i++){
            let charToFind = prefix[i]
            if(!(charToFind in curr.children)){
                return false
            }
            curr = curr.children[charToFind]
        }
        return true
    }
     displayTrie(root, word="") {
        if (root.isWordEnd) {
          console.log(word);
        }
        for (let child in root.children) {
          this.displayTrie(root.children[child], word + child);
        }
      }
      
      
}
const trie = new Trie()
trie.insert("the")
trie.insert("their")

console.log(trie.search("the"));
console.log(trie.startWithprefix("t"));
console.log(trie.root);
trie.displayTrie(trie.root);