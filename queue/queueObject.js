class Queue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    enqueue(value){
        this.items[this.rear] = value
        this.rear++
    }
    dequeue(){
       const item = this.items[this.front]
       delete this.items[this.front]
       this.front++
       return item
    }
    peek(){
        return this.items[this.front]
    }
    print(){
        console.log(this.items);
    }
}
const queue = new Queue()
queue.enqueue(12)
queue.enqueue(44)
queue.print()
queue.dequeue()
queue.print()