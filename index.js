/* Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por 
la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos de ambos, 
es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”.*/

// for(let i = 1; i <= 100; i++){ <<<<< Estructura del bucle for
    
//     if(i % 3 == 0 && i % 5 == 0){   // Si mi varible es multiplo de 3 O de 5 )
//         console.log("fizzbuzz");   //refleja esto en consola
//     } else if(i % 3 == 0){   //  Y sino se cumple lo de arriba, corroborar si esto se cumple
//         console.log("fizz");   // si se cumple reflejar esto en consola 
//     }else if(i % 5 == 0){   // si no se cumple lo de arriba, corroborar si esto se cumple
//         console.log("buzz");   // si se cumple reflejar esto en consola 
//         } else {   // si nada de lo de arriba se cumple 
//         console.log(i);   // reflejar en consola el numero correspondente a i
//     }
// } 


// Ejercicio 2

// // Pide la edad y si es mayor de 18 años indica que ya puede conducir.

// const edad = 0;   // Declaro variable
// if(edad >= 18){   // Si se cumple la CONDICION
//     console.log("Es mayor a 18 años. Puede conducir!");  // Mostrar esto en consola
// }else{   // Si no se cumple lo de arriba
//     console.log("Es menor, no puede conducir");      // mostrar esto en consola 
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

// const age = 3   // Se le da valor a la variable age
// const TotaldeEdad = age + 10;   // se crea una nueva variable para sumar 10 años y la variable TotaldeEdad
// console.log(TotaldeEdad); // Mostrar el resultado en consola
    

// Ejercicio 4

// Compila el ejercicio y arregla el error que se muestra en la consola.
// Haz que apareció 0.9 en la consola cuando esté corregido.

// // const VERSION = '0.1';  // se comenta esta constante

// const VERSION = '0.9';   // se agrega una variable para que de el resultado sea 0.9

// console.log(VERSION);  // Mostrar el resultado en consola

// Ejercicio 5

// Establece los valores de myVar1y myVar2para que el código imprima 'Hello World' en la consola.

// const myVar1 = "Hello";
// const myVar2 = "World";

// palabra = `${myVar1} ${myVar2}`; se cobrea la variable "palabra" y se suma las variables.

// console.log(palabra); // Mostrar el resultado en consola

// Ejercicio 6
// Concatena las constantes.

// Establece el valor de la variable htmlDocumenten una nueva cadena que tenga el contenido típico de un 
// documento HTML (con las etiquetas de HTML en el orden correcto).

// // // Asígnale el valor de la variable htmlDocumenta este nuevo string e imprime su valor en la consola.
// const a = '</title>';    // Se le dan valor a las variables
// const b = '</html>';
// const c = '<head>';
// const d = '</body>';
// const e = '<html>';
// const f = '</head>';
// const g = '<title>';
// const h = '<body>';

// //Modify this variable
// const htmlDocument = `${e} ${c} ${g} ${a} ${f} ${h} ${d} ${b}`;   // Se suma las variables en orden 

// console.log(htmlDocument); mostrar el resultado en consola

// Ejercicio 7
// Por favor llama a la función isOddpasándole el número 45345 como argumento.
// Imprima el resultado de la función en la consola.

// function isOdd(myNumber)   // Se declara la función
// {
// 	return !(myNumber % 2 == 0);  // se indica que returno el valor de la función de false a true !
// }

// // Your code below:

// console.log(isOdd(45345)); // Mostrar el resultado en consola la función con el argumento.

// Ejercicio 8

// Por favor completa el código necesario dentro de la función para que se comporte como se espera.

// // El ejercicio debería imprimirse 7 en la consola.
// function addNumbers(a,b){  // Se declara la función con los argumentos
// 	// This is the function's body. Write your code here.
// 	return a + b;  // se indica que retorne la suma
// }

// //Do not change the code below
// console.log(addNumbers(3,4)); // Mostrar el resultado en consola de la función con los argumentos.


// Ejercicio 9

// Completa la función llamada shortIntroduction(), que imprime en consola una pequeña introducción de tu persona.
// La función deberá tener 3 argumentos: name, professiony age.
// Estos parámetros se concatenarán de la siguiente manera:Hello! my name is {name}, my profession is {profession}. I am {age} years old.

// Por último, llama la función con los datos en el orden correcto para completar el ejercicio.

// function shortIntroduction(name,professiony, age) {  // Se declara la función con los argumentos
//     // Complete this function's body and arguments
//     return name + professiony + age  // Se indica que retorne la suma
//   }
  
// //   Fill the gaps with your data in the correct order

//   console.log(shortIntroduction("Martin ","Programador", " 33")) // Mostrar el resultado en consola de la función con los argumentos.


// Ejercicio 10

// Una vez que el usuario ingresa la cantidad, tenemos que imprimir una de las siguientes respuestas:
// Si quedan más de 100km, nosotros respondemos: "Todavía nos queda un poco de conducción para ir".
// Si quedan más de 50km, pero menos o igual a 100km nosotros respondemos: "Estaremos allí en 5 minutos.".
// Si quedan menos o igual a 50km, nosotros respondemos: "estoy estacionando te veré ahora mismo".



// const kilometrosARecorrer = (km) =>{   // Se declara la función con el argumento KM
// if (km > 100){   // Si esto se sucede
//     return "Todavía nos queda un poco de conducción para ir";  // retornar esto
// } else if (km >50){  // Si lo de arriba no sucede, ejecutrar esto
//     return "Estaremos allí en 5 minutos.";  // retornar esto
// }else{   // Si nada de lo de arriba sucede
//     return "estoy estacionando te veré ahora mismo";  // Retornar esto
// }
// }
// console.log(kilometrosARecorrer(50));  // Mostrar el resultado en consola con los argumentos.

// Ejercicio 11

// Crea una función getPriceque recibe la cantidad de personas que van a 
// asistir a la boda y devuelve el precio correspondiente en la consola.

// Nº de Personas	Precio
// Hasta 50 personas	$4,000
// Hasta 100 personas	$10,000
// Hasta 200 personas	$15,000
// // Más de 200 personas	$20,000

// const getPriceque = (invitados) => {  // se crea la funcion flecha
//      if(invitados <= 50) {   // Se indica 
//         return "$4,000";
//     }else if(invitados <= 100){
//          return "$10,000";
//     }else if(invitados <= 200){
//             return "$15,000";
//      }else {
//             return "$20,000";
//     }  

// }
// console.log(getPriceque(300));

// Ejercicio 12

// Actualiza el código de la función para hacer que devuelva un número entero (sin decimales) entre 1 y 10.

// function getRandomInt()
// {
// 	let randomNumber = Math.random();
// 	return randomNumber;
// }


// console.log(getRandomInt());

// const getRandomInt = () => {
//     return Math.floor(Math.random() * 10)
// }
// console.log(Math.floor(Math.random() * 10));

// Ejercicio 13
// ¡Bien! Ahora cambia lo que sea que necesites cambiar para hacer que el algoritmo imprima números enteros aleatorios entre 1 y 6.

// const getRandomInt = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }
// console.log(Math.floor(Math.random() * 6));

// Ejercicio 14
// Arregla el código para que cuente desde el 0hasta el 100.

// for (let i = 0; i <= 100; i ++) {
//     console.log(i);
// }

// Ejercicio 15
// Escribe 300 veces "Escribiré preguntas si estoy atascado"¡Afortunadamente ya conoces una forma rápida de hacerlo! (usando un bucle for).
// Crea una función llamada standardsMaker()que imprima 300 veces la frase Escribiré preguntas si estoy atascado.

// for (let i = 0; i < 300; i++) {
//     console.log("Escribiré preguntas si estoy atascado");
// }

// const standardsMaker = () => {
//     for (let i = 0; i < 300; i++) {
//         console.log("Escribiré preguntas si estoy atascado")
//     }
// }
// standardsMaker()

// Ejercicio 16

// Arregla el bucle while para que funcione y no genere un bucle infinito.
// Imprima del 100 al 0.
// Devuelve la variable countercuando llegue a 0.

// function startCounting() {
// 	let counter = 100;
// 	while (counter >= 1) {
// 		counter --;
// 		console.log(counter);
        
// 	}

// 	return counter;
// }

// startCounting();
