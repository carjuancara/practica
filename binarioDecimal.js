// convierte num a decimal
var num=1100;
var decimal=0;

var bin= String(num).split('').reverse().join('');
console.log('El numero Binario: '+num);

for (var i=0; i<bin.length; i++){
  if (bin[i]==='1'){decimal += Math.pow(2, i)}
}

console.log('En decimal es: '+decimal)