class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Stack{
    constructor(){
        this.top = null
    }
    push(value){
        const node = new Node(value)
        node.next = this.top
        this.top = node
    }
    pop(){
        this.top = this.top.next
    }
    peek(){
        if(this.top == null)
        throw new Error('stack is empty')
        return this.top.value
    }
}
const stack = new Stack()
stack.push(10);
stack.push(20);
console.log(stack.peek());
console.log('--------');
stack.pop()
console.log(stack.peek());