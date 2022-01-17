//decimal a octal
var num=2051;
var octal='';
console.log('El numero Decimal: '+num);
while (num >=8){
  let resto = num%8;
  octal=String(resto) + octal;   
  num=Math.floor(num/8);    
}
octal=String(Math.floor(num%8)) + octal; 
console.log('En octal es: '+octal);