
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    
  var tail=new LinkedListNode(data)
  
  if(head==null){
      return tail
  }
  
  var curr=head;
  while(curr.next!=null){
      curr=curr.next
  }
    curr.next=tail;
    return head
}

