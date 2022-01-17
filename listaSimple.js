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
}

const list = new List();

List.prototype.add = function (value) {
    if (!this.head) {
        this.head = new Node(value);
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
    }
};
list.add(30);
console.log(list);
