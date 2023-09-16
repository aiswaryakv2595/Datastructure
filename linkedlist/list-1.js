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
    addList(list1,list2){
        let current1 = list1.head
        let current2 = list2.head
        let value1
        let value2
        
        while(current1){
           value1 = current1.value
            current1 = current1.next
        }
        while(current2){
            value2 = current2.value
            current2 = current2.next
        }
   let sum = value1+value2
   
        return sum
    }
    createLinkedListFromNumber(number) {
        const numStr = number.toString();
        const reversedNumStr = numStr.split('').reverse().join('');
        const resultLinkedList = new LinkedList();
    
        for (let i = 0; i < reversedNumStr.length; i++) {
          const digit = parseInt(reversedNumStr[i]);
          resultLinkedList.insertFirst(digit);
        }
    
        return resultLinkedList;
      }
}
const list = new LinkedList()
list.insertFirst(22)
list.insertFirst(3)
list.insertFirst(1)
list.print()
console.log("-------------")
// list.reverse()
list.print()
// 1,3,22
// 5,20,23
console.log("-------------")
const list2 = new LinkedList()
list2.insertFirst(23)
list2.insertFirst(20)
list2.insertFirst(5)
list2.print()


const sum = list.addList(list, list2);
const reversedSumList = list.createLinkedListFromNumber(sum);
console.log('Reversed Sum List:');
console.log(reversedSumList)
