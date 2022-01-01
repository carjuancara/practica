/*
    Este metodo permite buscar un elemento dentro de un array
*/

var marcaAuto = ['citroen','peugeot', 'mazda', 'ferrari', 'fiat', 'renault'];

var encontrado = marcaAuto.find(element => element === 'fiat');

console.log(encontrado);
