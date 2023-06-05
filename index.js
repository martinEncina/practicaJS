/* Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por 
la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos de ambos, 
es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”.*/

// for(let i = 1; i <= 100; i++){ 
    
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("fizzbuzz");
//     } else if(i % 3 == 0){
//         console.log("fizz");
//     }else if(i % 5 == 0){
//         console.log("buzz");
//         } else {
//         console.log(i);
//     }
// }


// Ejercicio 2

// // Pide la edad y si es mayor de 18 años indica que ya puede conducir.

// const edad = 0;

// if(edad >= 18){
//     console.log("Es mayor a 18 años. Puede conducir!");
// }else{
//     console.log("Es menor, no puede conducir");
// }

// const chequearEdad = edad => {    
//     if(edad >= 18){
//         return "Es mayor a 18 años. Puede conducir!";
//         }else{
//             return "Es menor, no puede conducir";
//         }

// }
// console.log(chequearEdad(19))


// const conductor = (edad) =>{
//     if(edad >= 18){
//         return "Es mayor. Puede conducir";

//     }else if(edad === 17){
//         return "Te falta poco. Vuelve en tu proximo cumpleaños";
//     }else{
//         return "Eres menor de edad. Debes esperar hasta cuando tengas 18 años";
// }

// }

// console.log(conductor(18))

// Ejercicio 3

// Por favor añade/suma 10 años al valor de la variable age.

// Imprima el resultado en la consola.

// const age = 3
// const TotaldeEdad = age + 10;
// console.log(TotaldeEdad);
    

// Ejercicio 4

// Compila el ejercicio y arregla el error que se muestra en la consola.
// Haz que apareció 0.9 en la consola cuando esté corregido.

// // const VERSION = '0.1';

// const VERSION = '0.9';

// console.log(VERSION);

// Ejercicio 5

// Establece los valores de myVar1y myVar2para que el código imprima 'Hello World' en la consola.

// const myVar1 = "Hello";
// const myVar2 = "World";

// palabra = `${myVar1} ${myVar2}`;

// console.log(palabra);

// Ejercicio 6
// Concatena las constantes.

// Establece el valor de la variable htmlDocumenten una nueva cadena que tenga el contenido típico de un 
// documento HTML (con las etiquetas de HTML en el orden correcto).

// // // Asígnale el valor de la variable htmlDocumenta este nuevo string e imprime su valor en la consola.
// const a = '</title>';
// const b = '</html>';
// const c = '<head>';
// const d = '</body>';
// const e = '<html>';
// const f = '</head>';
// const g = '<title>';
// const h = '<body>';

// //Modify this variable
// const htmlDocument = `${e} ${c} ${g} ${a} ${f} ${h} ${d} ${b}`;

// console.log(htmlDocument);

// Ejercicio 7
// Por favor llama a la función isOddpasándole el número 45345 como argumento.

// Imprima el resultado de la función en la consola.

// function isOdd(myNumber)
// {
// 	return !(myNumber % 2 == 0);
// }

// // Your code below:

// console.log(isOdd(45345));

// Ejercicio 8

// Por favor completa el código necesario dentro de la función para que se comporte como se espera.

// // El ejercicio debería imprimirse 7 en la consola.
// function addNumbers(a,b){
// 	// This is the function's body. Write your code here.
// 	return a + b;
// }

// //Do not change the code below
// console.log(addNumbers(3,4));


// Ejercicio 9

// Completa la función llamada shortIntroduction(), que imprime en consola una pequeña introducción de tu persona.
// La función deberá tener 3 argumentos: name, professiony age.
// Estos parámetros se concatenarán de la siguiente manera:Hello! my name is {name}, my profession is {profession}. I am {age} years old.

// Por último, llama la función con los datos en el orden correcto para completar el ejercicio.