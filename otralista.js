class Lista{
    constructor(){
      this.head=null,
      this.length=0  
    }  	
        // agrega nodos al final de la lista
      insert(value){
      var node = new nodo(value),
      current = this.head
      
      if (current===null){
        this.head=node  ;
        this.length=1;
        return
      }
      
      while (current.next){
        current=current.next
      }
      current.next=node;
      this.length++;
    }
        // quita el ultimo elemento de la lista
        remove(){
       var current =this.head;
        if (current.next===null){return 'lista vacia'}
        while (current.next.next){
          current=current.next
        }
        current.next=null;
        this.length--;
      }
  
    	search(value){
      var current= this.head;    
      while (current.next){
        if (current.dato===value){ return console.log('Encontrado!')}
        current=current.next
      }
      return console.log('No se Encontro!')
    }
    	
  		addOn(value){
      var newnodo= new nodo(value);
      var current = this.head, previous=this.head;
      if (value < current.dato){
        var aux=current.dato;
          current=newnodo;
          newnodo.next=aux;
    	}
      while (current.dato < value){
        previous=current.next
      }
      var aux=current.next;
      current.next=newnodo;
      newnodo.next=aux;
      this.length++
    }
  }
  
  class nodo{
    constructor (value){
      this.dato=value,
      this.next=null
    }
  }

  var list =new Lista()
  list.insert(15);
  list.insert(25);
  list.insert(35);
  list.insert(45);
  list.insert(55);
  //list.addOn(40);
  list