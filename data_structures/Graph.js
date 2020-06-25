class Graph{
    constructor(){
        this.adjacentList = {};
    }
    addVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        this.adjacentList[vertex1].push(vertex2);
        this.adjacentList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacentList[vertex1] = this.adjacentList[vertex1].filter(e => e !== vertex2);
        this.adjacentList[vertex2] = this.adjacentList[vertex2].filter(e => e !== vertex1);
    }
    removeVertex(vertex) {
        let edgesToRemove = this.adjacentList[vertex];
        for (let edge of edgesToRemove) {
            this.removeEdge(vertex, edge);
        }
        delete this.adjacentList[vertex];

    }
}