// const { group, Console } = require("console")

// console.log('algo')
// console.info('algo')
// console.error('algo')
// console.warn('algo')


// var tabla = [{
//         a:1,
//         b:'Z'
//     },
//     {
//         a:2,
//         b: 'Otra'
//     }
// ]

// console.table(tabla)

// console.log('Conversacion:');
// console.group('Conversacion');

// console.log('Hola');
// console.log('bla');
// console.log('Blablablabla');
// console.log('Blablablabla');
// console.log('Blablablabla');
// console.groupEnd('bla')
// console.log('Adiós');
// console.groupEnd('Conversacion')

// console.log('Otra cosa de otra funcion');


function function1() {
    //
    console.group('funcion 1');
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien');
    function2();
    console.log('Hemos vuelto a la 1');
    console.groupEnd('funcion 1');
}

function function2(params) {
    //
    console.group('funcion 2')
    console.log('Ahora estamos en la funcion 2');
    console.groupEnd('funcion 2')
}

console.log('Empezamos');
function1();


console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');


/*
* console.log: recibe cualquier tipo y lo muestra en el consola.
* console.info: es equivalente a log pero es usado para informar.
* console.error: es equivalente a log pero es usado para errores.
* console.warn: es equivalente a log pero es usado para warning.
* console.table: muestra una tabla a partir de un objeto.
* console.count: inicia un contador autoincremental.
* console.countReset: reinicia el contador a 0.
* console.time: inicia un cronometro en ms.
* console.timeEnd: Finaliza el cronometro.
* console.group: permite agrupar errores mediante identación.
* console.groupEnd: finaliza la agrupación.
* console.clear: Limpia la consola.
*/