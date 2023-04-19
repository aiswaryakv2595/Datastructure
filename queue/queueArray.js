class Queue{
    constructor(){
        this.items = []
    }
    enqueue(value){
        return this.items.push(value)
    }
    dequeue(){
        return this.items.shift()
    }
    print(){
        if(this.items.length == 0)
        return null
        else return this.items.toString()
    }
}
const queue = new Queue()
queue.enqueue(10)
queue.enqueue(40)
queue.enqueue(50)
console.log(queue.print());
queue.dequeue()
console.log(queue.print());
queue.dequeue()
console.log(queue.print());