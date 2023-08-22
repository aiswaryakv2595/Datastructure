class Graph{
    constructor(vertices){
        this.vertices =vertices
        this.adjacencyMatrix = Array.from({length:vertices},()=>Array(vertices).fill(0))
    }
    addEdges(vertex1,vertex2){
        if(vertex1 >= 0 && vertex1 < this.vertices && vertex2 >=0 && vertex2 < this.vertices){
            this.adjacencyMatrix[vertex1][vertex2] = 1
            this.adjacencyMatrix[vertex2][vertex1] = 1
        }
    }
}
const graph = new Graph(3)
graph.addEdges(0,1)
graph.addEdges(1,2)
console.log(graph.adjacencyMatrix)