// EJERCICIO DE RECURSION
//
//Escribí una función llamada power que reciba dos parámetros: base y exponente. La función deberá retornar la potenciación correspondiente - es decir, la base elevada al exponente.
//Nota: recuerden contemplar el caso de las potenciaciones con exponente 0 

function power(base, exponent){
    if (exponent===0) return 1 // caso base
    return base * power(base,exponent-1)
  
  }
  
  // Ejemplos:
  // power(2,0) debería retornar 1
  // power(2,2) debería retornar 4
  // power(2,4) debería retornar 16
  power(2,10)