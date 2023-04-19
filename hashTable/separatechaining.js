class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size 
    }
    set(key,value){
        let index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }
        this.table[index].push([key,value])
    }
    get(key){
        let index = this.hash(key)
        if(this.table[index]){
            for(let i=0;i<this.table[index].length;i++){
                if(this.table[index][i][0] == key){
                    return this.table[index][i][1]
                }
            }
        }
        return undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}
const table = new HashTable(30)
table.set("name","nfwf")
table.set("mane","fnr")
console.log(table.get("name"));
table.display()