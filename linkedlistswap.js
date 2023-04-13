class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    insertLast(value){
        const node = new Node(value)
        if(this.size == 0){
            this.head = node
        }
        else{
            let current = this.head
            while (current.next != null) {
                current = current.next
            }
            node.next = null
            current.next = node
           
            
        }
        this.size++
    }
    swap(value1,value2){
      
        let node1 = null
        let node2 = null
        let current = this.head
        while(current){
            if(current.value == value1){
               node1 = current
            }
            if(current.value == value2){
                node2 = current
            }
            current = current.next
        }
        if (!node1 || !node2) {
            console.log("Cannot swap values, one or more not found in the list")
            return
        }
        let temp = node1.value
    node1.value = node2.value
    node2.value = temp
        
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.value);
            current = current.next
        }

    }
}
const list = new LinkedList()
list.insertLast(10)
list.insertLast(20)
list.insertLast(30)

list.print()
console.log('swap');
list.swap(20,30)
list.print()