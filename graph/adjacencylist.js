class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1])
        this.addVertex(vertex1)
        if(!this.adjacencyList[vertex2])
        this.addVertex(vertex2)

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`);
        }
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
            // console.log('adj',adjNodes);
            for(let item of adjNodes){
                if(!visited[item]){
                    visited[item] = true
                   
                    queue.push(item)
                }
            }            
        }
       
}
dfs(startingNode,visited = {}){
    visited[startingNode] = true
    console.log(startingNode);
    for(let neighbor of this.adjacencyList[startingNode]){
        if(!visited[neighbor]){
            visited[neighbor] = true
            this.dfs(neighbor,visited)
        }
    }
}
}
const graph = new Graph()
graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(5)
graph.addVertex(6)
graph.addEdge(0,1)
graph.addEdge(0,2)
graph.addEdge(1,3)
graph.addEdge(3,4)
graph.addEdge(3,5)
graph.addEdge(4,5)
graph.addEdge(5,6)
// graph.display()
graph.bfs(0)
console.log('dfs');
graph.dfs(0)