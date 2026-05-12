
/*Operadores de COMPARACION (==, ===, !=, !==, >, <, >=, <=)
    igualdad ==
    igualdad estricta === (si es igual y son del mismo tipo)
    Desigualdad !=
    Desigualdad estricta !==
    Mayor que >
    Menor que <
    Mayor o igual que >=
    Menor o igual que <=
*/
/* Operadores LÓGICOS (Para evaluar más de una condición)
    AND --> &&   (El resultado será true si todas la condiciones son true)
    OR --> ||  (El resultado será true si alguna de las condiciones es true)
    NOT --> !  (Pregunta por el cambio del valor de una expresión )
*/

function condiciones()
{
    let aprobado=true;
    if (aprobado==true)
    {
        console.log("Has aprobado. Enhorabuena");
    }
    else
    {
        console.log("Hay que seguir estudiando");
    }
}

condiciones();

function compararNumeros(num1,num2){

    if (num1 > num2){
        console.log( "El número: " + num1 + " es mayor que el número: " + num2);
    }else {
        console.log( "El número: " + num1 + " es menor que el número: " + num2);
    }
}

function compararNumerosIgualdad(num1,num2){

    if (num1 > num2){
        console.log( "El número: " + num1 + " es mayor que el número: " + num2);
    }else if (num1 < num2){
        console.log( "El número: " + num1 + " es menor que el número: " + num2);
    } else {
        console.log( "El número: " + num1 + " es igual que el número: " + num2);
    }
}


compararNumeros(6,7);
compararNumeros(15, 10);

compararNumerosIgualdad(18, 20);
compararNumerosIgualdad(9,9);



//REALIZA UNA FUNCION A LA QUE SE LE PASE LA EDAD COMO ARGUMENTO E INDIQUE EN QUÉ ETAPA
// DE LA VIDA ESTAS
// ENTRE 0-12 INFANCIA 
// ENTRE 13-17 ADOLESCENCIA
// ENTRE 18-65 EDAD ADULTA
// MAYOR DE 65 TERCERA EDAD

function edadEtapa(edad1, edad2, edad3, edad4){

    if




}

edadEtapa()