class Stack{
    constructor(){
        this.items = []
    }
    push(value){
        return this.items.push(value)
    }
    pop(){
       return this.items.pop()
    }
    print(){
        return this.items.toString()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    pushAtbottom(value) {
        if(this.items.length == 0){
            this.push(value)
        }
        else{
            let top = this.pop()
            this.pushAtbottom(value)
            this.push(top)
        }
      
    }
    
}
const stack = new Stack()
stack.push(1)
stack.push(3)
stack.push(1)
stack.pushAtbottom(4)
console.log(stack.peek());
console.log(stack.print());

