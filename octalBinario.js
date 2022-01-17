//octal a binario
clear();
var num='1500';
var binario='';
console.log('El numero octal: '+num);
//for (i of num){
for (let i=0; i<num.length; i++){
	switch (num[i]){
    case '0':
    	binario +='000';
      break;
    case '1':
    	binario +='001';
      break;
    case '2':
    	binario +='010';
      break;
    case '3':
    	binario +='011';
      break;
    case '4':
    	binario +='100';
      break;
    case '5':
    	binario +='101';
      break;
    case '6':
    	binario +='110';
      break;
    case '7':
    	binario +='111';
      break;    
	}
}
console.log('En binario es: '+binario);