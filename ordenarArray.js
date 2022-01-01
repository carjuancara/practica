/*
    Este metodo permite ordenar un array de string mediante algoritmo
    burbuja
*/
//                                         i           j               
var marcaAuto = ['citroen', 'peugeot', 'mazda', 'ferrari', 'fiat', 'renault'];

/*
debo saber cuantos elementos tiene el array y recorrerlo preguntando 
la extension del elemento

el nuevo array debe comenzar con el los elementos que tengan menos caracteres y 
finalizando los que tengan mas caracteres

ordenar nuevamente el array con SORT


*/
function Burbuja(array) {
    
    var n, i, k, aux;
    n = marcaAuto.length;
    console.log(marcaAuto); // Mostramos, por consola, la marcaAuto desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (marcaAuto[i].length > marcaAuto[i + 1].length) {
                aux = marcaAuto[i];
                marcaAuto[i] = marcaAuto[i + 1];
                marcaAuto[i + 1] = aux;
            }
        }
    }

    console.log(marcaAuto); // Mostramos, por consola, la marcaAuto ya ordenada
}


Burbuja(marcaAuto);
