// bindear: es ponerle un valor a this

var carlos = {
  name:'Carlos Juan',
  peso:85,
  altura:1.82
};
var juan = {
  name:'Juan Carlos',
  peso:104,
  altura:1.82
};

function imc(){
  var imc= this.peso/(this.altura*this.altura);
  imc = imc.toFixed(2);
  var estado='';
  
  if (imc <=20)						{estado='Desnutrido!'};      
  if (imc > 20 && imc<=25){estado='con peso normal!'};
  if (imc > 25)						{estado= "con Obesidad!"}; 
  
  console.log('Hola '+ this.name + ' Tu IMC ES: ' + imc);
  console.log('Tu estas: ',estado);
  
}


var imcCarlos = imc.bind(carlos);
var imcJuan	  = imc.bind(juan);
imcCarlos();
imcJuan();
