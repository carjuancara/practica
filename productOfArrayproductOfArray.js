// EJERCICIO DE RECURSION
//
//Escribí una función llamada `productOfArray` que reciba un arreglo de números y 
//retorne el producto de todos ellos.

var arr=[1,2,3,4,5,6];

function productOfArray(arr){
  var producto=arr.pop();
  
  
if(arr.length === 0) return 1  
return producto * productOfArray(arr)
}

// Ejemplos:
// productOfArray([1,2,3]) debería retornar 6
// productOfArray([1,2,3,10]) debería retornar 60

productOfArray(arr)