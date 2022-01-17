//decimal a binario
var num=1000;
var binario='';
console.log('El numero Decimal: '+num);
while (num >1){
  let resto = num%2;
  binario=String(resto) + binario;   
  num=Math.floor(num/2);    
}
binario='1' + binario; 


console.log('En binario es: '+binario);