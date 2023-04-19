class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Queue{
    constructor(){
        this.front = null
        this.rear = null
    }
    enqueue(value){
        const node = new Node(value)
        if(this.front == null){
            this.front = node
            this.rear = node
        }
        else{
            this.rear.next = node
            this.rear = node
        }
    }
    dequeue(){
        if(this.front == null)
        return null
        else{
            this.front = this.front.next
        }
    }
    peek(){
        return this.front ? this.front.value : null
    }
}
const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
console.log(queue.peek());
queue.dequeue()
console.log(queue.peek());
