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
  console.log('Hola '+ this.name + ' Tu IMC ES ' + this.peso/(this.altura*this.altura));
}

var saludarCarlos = imc.bind(carlos);
var saludarJuan	  = imc.bind(juan);

saludarCarlos();
saludarJuan();






