/*
    Este metodo permite ordenar un array de string mediante algoritmo
    burbuja.
    
*/
//                                         i           j               
var marcaAuto = ['citroen', 'peugeot', 'mazda', 'volvo', 'ferrari', 'fiat', 'renault'];


function Burbuja(array) {

    var n, i, k, aux;
    var aux2 = [];
    n = marcaAuto.length;
    console.log(marcaAuto); // Mostramos, por consola, la marcaAuto desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (marcaAuto[i].length === marcaAuto[i + 1].length) {
                aux2.push(marcaAuto[i], marcaAuto[i + 1]);
                aux2.sort();

                marcaAuto[i] = aux2[0];
                marcaAuto[i + 1] = aux2[1];
                aux2 = [];
            }
            else {
                if (marcaAuto[i].length > marcaAuto[i + 1].length) {
                    aux = marcaAuto[i];
                    marcaAuto[i] = marcaAuto[i + 1];
                    marcaAuto[i + 1] = aux;
                }
            }
        }
    }

    console.log(marcaAuto); // Mostramos, por consola, la marcaAuto ya ordenada
}


Burbuja(marcaAuto);
