/*Definimos una función con parámetros. 
  Los parámetros van separados por , si hay más de uno*/
function getSaludoClase(ciclo, clase="Sin clase") {
    let texto = "HOLA CLASE DE " + clase + " - " + ciclo;
    return texto;
}

//definir función suma
function suma(sumando1=0, sumando2=0){
    return sumando1 + sumando2;
}

// Recuerda declarar las funciones antes de invocarlas
let saludo = getSaludoClase("SMR" , "2ºB" );
console.log(saludo);
saludo = getSaludoClase("ASIR" , "1ºA");
console.log(saludo);

//invocar función suma
let resultado = suma(7,8);
console.log(resultado);

resultado = suma(9);
console.log(resultado);
