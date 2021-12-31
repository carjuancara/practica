/* invertir string
 dado un string, este metodo devolvera un nuevo string invirtiendo el 
 orden de los elementos, el ultimo elemento a la primera posicion,
el penultimo al segundo, etc.
    stringOrigin   = 'Carlos'
    stringDevuelto = 'solraC'
 */


var miString = 'Carlos Juan';

String.prototype.invertir = function () {
    let zxc= '';    
    for (var i = miString.length -1; i >= 0; i--) {
        zxc += miString[i];
    }
    return zxc;
}

console.log('Mi string sin invertir es: '+ miString)
console.log('Mi string invertido es: ' + miString.invertir());