class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        let count = 0;
        while (this.table[index] && this.table[index].key !== key) {
            index = (index + count * count) % this.size;
            count++;
        }
        this.table[index] = { key: key, value: value };
    }

    get(key) {
        let index = this.hash(key);
        let count = 0;
        while (this.table[index] && this.table[index].key !== key) {
            index = (index + count * count) % this.size;
            count++;
        }
        return this.table[index] ? this.table[index].value : null;
    }

    remove(key) {
        let index = this.hash(key);
        let count = 0;
        while (this.table[index] && this.table[index].key !== key) {
            index = (index + count * count) % this.size;
            count++;
        }
        if (this.table[index]) {
            delete this.table[index];
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i].value);
            }
        }
    }
}

const table = new HashTable(40);
table.set("name", "xyz");
table.set("age", 10);
table.set("mane", "ffrff");
console.log(table.get("name"));
table.display();
table.remove("age");
table.display();
