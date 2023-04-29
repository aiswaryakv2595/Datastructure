class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
}
const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
console.log(graph);