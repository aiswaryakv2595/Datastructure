class Node{
    constructor(value){
        this.value = value
    }
}
class LinkedList{
    constructor(){
        this.head = null
    }
    insertFirst(value){
        const node = new Node(value)
        if(this.head == null){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
    }
    print(){
        if(this.head == null)
        console.log('no list found')
        else{
            let current = this.head
            while(current){
                console.log(current.value)
                current = current.next
            }
        }
    }
    reverse(){
        let prev = null
        let current = this.head
        while(current){
            let next = current.next
            current.next = prev
            prev = current
            current=next
        }
        this.head = prev
    }
}
const list = new LinkedList()
list.insertFirst(10)
list.insertFirst(20)
list.insertFirst(30)
list.print()
console.log("-------------")
list.reverse()
list.print()