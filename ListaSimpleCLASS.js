class Lista{
    constructor(){
        this.head=null,
        this.length=0
    }
    remove(){  
        var current = this.head;
          
        if (!current) return null
          
        if (current.next === null) {
          this.head = null;
          return current.value
          
        }
          
        while (current.next.next){
          current.next;
        }
        var aux = current.next;
        current.next=null;
        return aux.value;  
          
        }
        search(value) { 
            var current = this.head;
              
            if (!current) return 'Lista vacia'
              
            while (current){
              
              if (typeof value === 'function'){
                if (value(current.value)) return 'Valor encontrado --->'+current.value
              
                }
              if (current.value===value){
                return 'Valor encontrado --->'+current.value
              }
            current=current.next;
              
            }
             
            return null 
            }    
            listar(){
                var current = this.head;
                
               if (!current) return 'lista vacia'   
                
               while (current){
                 console.log('nodo '+current.value)
                 current=current.next  
               }
              }
              addInTo(value){
                var current  = this.head;
                var nuevoNodo= new Node(value);  
                var anterior =0; 
                var aux      =0; 
               // agrega el primero a la lista vacia
                 if (!current){
                    this.head=nuevoNodo;    	
                     return
                 }
                 // ingreso un numero menor al primero de la
                   // lista    
                   if (current.value>value){
                       aux	          =current;
                       this.head	    =nuevoNodo;
                       nuevoNodo.next =aux;  
                       return
                   }
               // si solo hay 1 en la lista
               if (!current.next){
                   if (current.value<=value){
                     current.next=nuevoNodo;
                     
                   }else{
                     aux=current
                     this.head=nuevoNodo;
                     nuevoNodo.next=aux;
                   }
                   return 
                 }
               // recorre la lista   
                 while(current){ 
               // si esta en el ultimo nodo   
                   if (current.next===null){
               // agrega al nodo segun corresponda
                     if (current.value<=value){
                       current.next=nuevoNodo; // despues del nodo actual
                         return
                    }else{
                       //> antes del nodo actual
                       aux	         =current;
                       anterior.next =nuevoNodo;
                       nuevoNodo.next=aux;  
                       return
                     }    
                     // si no es el ultimo nodo
                     // busca el siguiente
                   }else if (current.value<value){	//  
                           anterior=current;	//  guarda el anterior
                           current=current.next;  //  pasa al siguiente nodo
                       }else{
                       // si el valor es MAYOR o IGUAL lo agrega despues del actual
                       aux	         =current;
                       anterior.next =nuevoNodo;
                       nuevoNodo.next=aux;  
                       return
                     }    
                }
                     
               }    
        }

class Node{
    constructor(dato){
        this.value=dato,
        this.next=null
    }
}