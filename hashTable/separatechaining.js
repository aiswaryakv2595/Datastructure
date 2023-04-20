class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0 
        for(let i=0;i<key.length;i++){
            total+= key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
     let index = this.hash(key) 
        if(!this.table[index])
        this.table[index] = []
        this.table[index].push([key,value])
    }
    get(key){
        let index = this.hash(key) 
        if(this.table[index]){
            for(let i=0; i<this.table[index].length;i++){
                if(this.table[index][i][0] == key)
                return this.table[index][i][1]
            }
            return undefined
        }
    }
    remove(key) {
        let index = this.hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] == key) {
                    this.table[index].splice(i, 1);
                    if (this.table[index].length === 0) {
                        this.table[index] = undefined;
                    }
                    return true;
                }
            }
        }
        return false;
    }
    display(){
        for(let i=0; i<this.table.length;i++){
            if(this.table[i])
            console.log(i,this.table[i]);
        }
    }
}
 const table = new HashTable(30)
 table.set("name","ammu");
table.set("place","adr");
table.set("addr","nfkhgek");
table.set("naem","vff");
table.display();
console.log('remove');
// Remove a key
table.remove("naem");
table.display();