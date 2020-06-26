class PriorityQueue{
    constructor
}



class WeightedGraph{
    constructor(){
        this.adjacentList={};
    }
    addVertex(vertex){
        if(!this.adjacentList[vertex]) this.adjacentList[vertex]=[];
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacentList[vertex1].push({node: vertex2,weight});
        this.adjacentList[vertex2].push({node: vertex1,weight});
    }
}