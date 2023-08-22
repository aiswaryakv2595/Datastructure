class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex])
        this.adjacencyList[vertex] = new Set()
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1])
        this.addVertex(vertex1)
        if(!this.adjacencyList[vertex2])
        this.addVertex(vertex2)

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
bfs(startingNode){
    const visited = {}
    const queue = []
    visited[startingNode] = true
    queue.push(startingNode)
    while(queue.length){
        let curr = queue.shift()
        console.log(curr);
        const adjNodes = this.adjacencyList[curr]
        for(let item of adjNodes){
            if(!visited[item]){
                visited[item] = true
                queue.push(item)
            }
           
        }
    }
}

}
const graph = new Graph()
graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)

graph.addEdge(0,1)
graph.addEdge(0,2)

graph.addEdge(1,3)
graph.addEdge(2,4)
graph.addEdge(3,4)

graph.bfs(1)