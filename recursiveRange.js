// EJERCICIO DE RECURSIVIDAD
//
//Escribí una función llamada recursiveRange que reciba como único argumento un número, 
//y retorne la suma de todos los números enteros desde 0 hasta dicho número.


function recursiveRange(num){
	if (num===0) return 0
	return num + recursiveRange(num-1)
}

// Ejemplos: 
// recursiveRange(6) debería retornar 21
// recursiveRange(10) debería retornar 55


recursiveRange(10)