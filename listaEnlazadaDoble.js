/*
crea una lista simple para facilitarme la comprension

POR CONVENSION LOS NOMBRES SON LOS SIGUIENTES:

a la lista se la llama  :"List"
al nodo se lo llama     :"Node"
siguiente               :"next"

LISTA ENLAZADA UNIDIRECCIONAL
*/

// clase List 
function List() {
    this.head = null;
}
//clase node contiene los datos y el puntero al proximo node
function Node(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
}

const list = new List();

List.prototype.add = function (value) {
    const newNode = new Node(value);
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        newNode.previous = current;
        current.next = newNode;
    }
};
list.add(15);
list.add(30);
console.log(list.head.next.value);
