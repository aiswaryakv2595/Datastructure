class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }
    
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }
    
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`);
        }
    }
    
    hasCycle() {
        const visited = {};
        for (let vertex in this.adjacencyList) {
            if (!visited[vertex] && this._hasCycleDFS(vertex, null, visited)) {
                return true;
            }
        }
        return false;
    }

    _hasCycleDFS(vertex, parent, visited) {
        visited[vertex] = true;

        for (let neighbor of this.adjacencyList[vertex]) {
            if (!visited[neighbor]) {
                if (this._hasCycleDFS(neighbor, vertex, visited)) {
                    return true; // Return true only if the recursive call finds a cycle
                }
            } else if (neighbor !== parent) {
                return true; // If the neighbor is visited and not the parent, it's a cycle
            }
        }

        return false;
    }
}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);

console.log(graph.hasCycle()); // Output: false
