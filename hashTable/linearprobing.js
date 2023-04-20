class HashTable {
    constructor(size) {
      this.table = new Array(size)
      this.size = size
    }
    
    hash(key) {
      let total = 0
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i)
      }
      return total % this.size
    }
    
   set(key,value){
    let index = this.hash(key)
    if(!this.table[index]){
        this.table[index] = [key,value]
    }
    else{
        let i = index
        do{
            i = (i+1) % this.size  
            if(!this.table[i]){ ///empty slot found
                this.table[i] = [key,value]
                return
            }  
            else if(this.table[i][0] == key){
                this.table[i][1] = value
                return
            }
        }
        while(i!==index);
    }
    
   }
   
    get(key) {
      let index = this.hash(key)
      let i = index
      while (this.table[i]) {
        if (this.table[i][0] === key) {
          return this.table[i][1]
        }
        i = (i + 1) % this.size
        if (i === index) {
          break // stop if we wrapped around to index
        }
      }
      return undefined // key not found
    }
    
    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          console.log(i, this.table[i])
        }
      }
    }
  }
  const table = new HashTable(30)
  table.set("name","ammu")
  table.set("place","adr")
  table.set("addr","nfkhgek")
  table.set("naem","vff")
  table.display()  