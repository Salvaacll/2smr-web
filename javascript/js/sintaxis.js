//Declaración de variables
//Tipos Numero, Boleano, cadena (string), null y undefined 

let Nombre="";
let Year=2026;
const PI=3.1416;
let Activado = true;
let Prueba;
let VarNull= null;

console.log(Nombre, Year);
Nombre="Prueba";
console.log(Nombre, Year, PI);
console.log(Activado, Prueba, VarNull);

//Tipos de variables y tipado dinámico
console.log("Se muestran los tipos de variales");
console.log(typeof  Nombre);
console.log(typeof  Year);
console.log(typeof  PI);
console.log(typeof  Activado);
console.log(typeof  Prueba);
console.log(typeof  VarNull);
Activado = 20;
console.log("Activado ahora es ", typeof  Activado, "y su valor es: ", Activado);

/*Casting de variables (Asignarle un nuevo tipo a una variable)
  el casting a null no es posible y tampoco a undefined,
  simplemente se asigna el valor a la variable. 
  Booleanos
  Un número que no es 0 es true y si es 0 es false
  Una cadena vacía es false y una cadena con contenido es true.
  Casting 
*/

Activado = Boolean(Activado)
console.log("Activado ahora es ", typeof  Activado, "y su valor es: ", Activado);




