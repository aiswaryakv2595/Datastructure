class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

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
        const index = this.hash(key);
        const newNode = new Node(key, value);

        if (!this.table[index]) {
            this.table[index] = newNode;
        } else {
            let currentNode = this.table[index];
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }

    get(key) {
        const index = this.hash(key);

        if (!this.table[index]) {
            return null;
        }

        let currentNode = this.table[index];
        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    remove(key) {
        const index = this.hash(key);

        if (!this.table[index]) {
            return;
        }

        if (this.table[index].key === key) {
            this.table[index] = this.table[index].next;
            return;
        }

        let currentNode = this.table[index];
        while (currentNode.next) {
            if (currentNode.next.key === key) {
                currentNode.next = currentNode.next.next;
                return;
            }
            currentNode = currentNode.next;
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            let currentNode = this.table[i];
            while (currentNode) {
                console.log(i, currentNode.value);
                currentNode = currentNode.next;
            }
        }
    }
}

const table = new HashTable(40);
table.set("name", "xyz");
table.set("age", 10);
table.set("mane", "ffrff");
table.set('jdfg','edas')
table.display();
table.remove("mane");
console.log('remove');
table.display();
// console.log('get '+table.get("name"));
// console.log('list');
// console.log(table);
