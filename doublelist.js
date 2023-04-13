//Double linked list
class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}
class DoubleLinkedlist{
    constructor(){
        this.head = null
        this.tail = null
        this.size =0
    }
    insertFirst(value){
        const node = new Node(value)
        if(this.size == 0){
            this.head = node
            this.tail = node
        }
        else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }
    insertLast(value){
        const node = new Node(value)
        if(this.size == 0){
            this.head = node
            this.tail = node
        }
        else{
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    print(){
        let current = this.head
        while (current) {
            console.log(current.value);
            current = current.next
        }
    }
}
let dl = new DoubleLinkedlist()
dl.insertFirst(10)
dl.insertFirst(90)
dl.insertLast(20)
dl.print()