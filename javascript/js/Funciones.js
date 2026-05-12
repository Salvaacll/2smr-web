//¿Qué es una función?
// Bloque de código que realiza un conjunto de tareas o cálculos

//Declaración de la función
function saludarClase(){
    console.log("Hola Clase");
}

// Las funciones pueden devolver un valor
function darSaludo(){
    return "Hola Clase por segunda vez";
}


//llamada de la funcion
saludarClase();

let saludo = darSaludo();
console.log(saludo);
