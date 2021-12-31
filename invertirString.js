// invertir string


var miString = 'Carlos Juan';
var zxc= '';
String.prototype.invertir = function () {
    
    for (var i = miString.length -1; i >= 0; i--) {
        zxc += miString[i];
    }
    return zxc;
}

console.log('Mi string sin invertir es: '+ miString)
console.log('Mi string invertido es: ' + miString.invertir());