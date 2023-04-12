class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    insertFirst(value){
       const node =  new Node(value)
       if(this.size == 0){
        this.head = node
        this.tail = node
       }
       else{
        node.next = this.head
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
            this.tail.next = node
            this.tail = node
           }
           this.size++
    }
    removeFront(){
        if(this.size == 0){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }
    removeBack(){
        if(this.size == 0){
            return null
        }
        const value = this.tail.value
        if(this.size == 1){
            this.head = null
            this.tail = null
        }
        else{
            let prev = this.head
            while (prev.next != this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
        

    }
    arraytoList(arr){
        let curr = null
        for(let i=0;i<arr.length;i++){
            let node = new Node(arr[i])
            if(this.head == null){
                this.head = node
            }
            else{
            curr.next = node
            }
            curr = node
        }
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

let list = new LinkedList()
// list.insertFirst(10)
// list.insertFirst(30)
// list.insertLast(100)
// list.removeBack()
list.arraytoList([10,20,30])

list.print()