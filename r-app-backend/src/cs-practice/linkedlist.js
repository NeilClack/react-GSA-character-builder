/*

Node 
    - Data
    - Pointer to next node
    - Pointer to previous node

    2 types of LinkedLists: Singly linked & Doubly linked

Node1 -> Node2 -> Node3 -> Node4 -> ..... -> NodeN

Node 1 -> null

*/

function Node(data){
    this.data = data;
    this.next = null;
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(data) {
        const node = new Node(data);

        if(!this.head) {
            // Makes this node both the tail & head
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        
    }

    removeNode(data) {
        let previous = this.head; // Node behind the current node
        let current = this.head;

        while(current) {
            if(current.data == data) {
                if(current === this.head) // If we found the first element
                    this.head = this.head.head.next; // Replace this with the node after it
                else if(current === this.tial)
                    this.tail = previous; // Replace tail with node behind current node

                
                previous.next = current.next;
            }

            previous = current;
            current = current.next;
        }
    }

    traverse(cb) {
        let current = this.head;
        // 2: loop through linked list untill current.next == null
        if(cb) {
            while(current) {
                cb(current) // Pass data up to callback
                current = current.next;
            }
        }
    }
}

(function test() {
    let linkedList = new LinkedList();

    linkedList.addNode("Node 1")
    linkedList.addNode("Node 2")
    linkedList.addNode("Node 3")
    linkedList.addNode("Node 4")
    
    // 1: calling traverse with a call back function 
    linkedList.traverse((node) => { 
        // 3: grab current node from loop
        console.log(node.data)
    })

    removeAndLog(linkedList, "Node 2")
})()

function removeAndLog(linkedList, str) {
    console.log(`Remove node ${str}`)
    linkedList.removeNode(str);

    console.log(`Updated nodes: `)
    linkedList.traverse((node) => { 
        // 3: grab current node from loop
        console.log(node.data)
    })
    
}