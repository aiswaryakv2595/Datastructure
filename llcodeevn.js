// Linked list practice - 1
class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }
    prepend(value){ //add first
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){//add last
        const node = new Node(value)
        if(this.head == null){
            this.head = node
        }
        else{

            let prev = this.head
            while (prev.next) {
                prev = prev.next  
            }
            prev.next = node
        }
    }
    insert(value,index){
        if(index < 0 || index > this.size){
            return
        }
        if (index == 0) {
            this.prepend(value)
        }
        else{
            const node = new Node(value)
            let previous = this.head
            for (let i = 0; i < index-1; i++) {
               previous = previous.next
            }
          node.next = previous.next
          previous.next = node
          this.size++

        }
    }
    removeFrom(index){
        if(index < 0 || index>=this.size){
            return null
        }
        let removedNode;
        if(index ==0){
            removedNode = this.head
            this.head = this.head.next
        }
        else{
            let prev = this.head
            
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
           removedNode = prev.next
           prev.next = removedNode.next
        }
        this.size--
        return removedNode.value;
    }
    removeValue(value){
        
        if(this.isEmpty()){
            return null
        }
       if(this.head.value == value){
        this.head = this.head.next
        this.size--
        return value
       }
       else{
        let prev = this.head
        while (prev.next && prev.next.value != value) {
            prev = prev.next
            
        }
        let removedNode = prev.next
        prev.next = removedNode.next
        this.size--
       }
    }
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let current = this.head
        let i=0
        while (current) {
            if(current.value == value){
                return i
            }
            current = current.next
            i++
        }
        return -1
    }

    //reverse
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    insertBefore(nodeval,value){
        const node = new Node(value)
        if(this.size == 0){
            this.head = node
        }
        else{
            if(this.head.value == nodeval ){
               this.prepend(value)
               return
            }
            let prev = this.head
            while (prev.next != null && prev.next.value !== nodeval) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++

        }
    }
    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }
        else{
            let current = this.head
            
            while (current) {
                console.log(current.value);
                current = current.next
            }
         
        }
    }
    removeDup(){
        let current = this.head

       while(current!= null && current.next!== null){
        if(current.value === current.next.value){
            current.next = current.next.next
        }
        else
        current = current.next
       }
       
    }
    reviewArrayRev(array, limit) {
        if (!Array.isArray(array)) {
          return new LinkedList();
        }
        const newList = new LinkedList();
        for (let i = 0; i < limit && i < array.length; i++) {
          newList.append(array[i]);
        }
        for(let j=array.length;j>limit;j--){
            newList.append(array[j])
        }
        
        return newList;
      }
}
 const list = new LinkedList()
 
 list.prepend(10);
 list.prepend(20);
 list.prepend(30)
 list.insertBefore(20,35)
//  list.removeValue(300)

list.print()
// console.log('dup');
// list.removeDup()
// list.print()
//  console.log(`position is ${list.search(20)}`);
console.log(list.reviewArrayRev([10,20,30,40],2))
// list.print()