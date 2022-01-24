// contar arrays dentro de arrays
// sin recursion

clear();
var arr=[1,3,4,[3,1],5,9,11,[200,100],33,[3],[8],12];
var suma=1;  
for (var i=0; i<arr.length; i++){
	if (Array.isArray(arr[i])){
      suma++
    }     	
}  
console.log('El total de arrays es de: ' +`${suma}`);

arr.forEach()