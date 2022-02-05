 	
function LinkedList() {
  this.head = null;

}  

function Node(dato) {
  this.value = dato;
  this.next = null;
}  
 
LinkedList.prototype.remove = function () {  
var actual = this.head;

if (!actual) return null

if (actual.next === null) {
  this.head = null;
  return actual.value

}

while (actual.next.next){
  actual.next;
}
var aux = actual.next;
actual.next=null;
return aux.value;  
  
}


LinkedList.prototype.search = function (v) { 
var actual = this.head;

if (!actual) return 'Lista vacia'

while (actual){

  if (typeof v === 'function'){
    if (v(actual.value)) return 'Valor encontrado --->'+actual.value

    }
  if (actual.value===v){
    return 'Valor encontrado --->'+actual.value
  }
actual=actual.next;

}
 
return null 
}


LinkedList.prototype.list = function(){
  var actual = this.head;
  
 if (!actual) return 'lista vacia'   
  
 while (actual){
   console.log('nodo '+actual.value)
  actual=actual.next  
 }
}

LinkedList.prototype.add = function(v){
  var nuevoNodo	= new Node(v);
  var actual 		= this.head;
  if (!actual){
    this.head=nuevoNodo;
    return
  }
  while (actual.next){
    actual=actual.next;
  }
  actual.next = nuevoNodo;
  return
}

LinkedList.prototype.add_orden = function(v){
 var actual		= this.head;
 var nuevoNodo= new Node(v);  
 var anterior =0; 
 var aux      =0; 
// agrega el primero a la lista vacia
  if (!actual){
     this.head=nuevoNodo;    	
      return
  }
  // ingreso un numero menor al primero de la
    // lista    
    if (actual.value>v){
      	aux		=actual;
        this.head	=nuevoNodo;
        nuevoNodo.next =aux;  
        return
    }
// si solo hay 1 en la lista
if (!actual.next){
    if (actual.value<=v){
      actual.next=nuevoNodo;
      
    }else{
      aux=actual
      this.head=nuevoNodo;
      nuevoNodo.next=aux;
    }
    return 
  }
// recorre la lista   
  while(actual){ 
// si esta en el ultimo nodo   
    if (actual.next===null){
// agrega al nodo segun corresponda
      if (actual.value<=v){
        actual.next=nuevoNodo; // despues del nodo actual
      	return
     }else{
        //> antes del nodo actual
        aux	       =actual;
        anterior.next =nuevoNodo;
        nuevoNodo.next=aux;  
        return
      }    
      // si no es el ultimo nodo
      // busca el siguiente
    }else if (actual.value<v){	//  
    		anterior=actual;	//  guarda el anterior
		actual  =actual.next;  //  pasa al siguiente nodo
    	}else{
        // si el valor es MAYOR o IGUAL lo agrega despues del actual
        aux	       =actual;
        anterior.next =nuevoNodo;
        nuevoNodo.next=aux;  
        return
      }    
 }
  	
}  