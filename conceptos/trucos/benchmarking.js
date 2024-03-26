console.time('Todo');

let suma = 0;
console.time('bucle');

for (let i = 0; i < 100000000; i++) {
    suma += 1;
    
}

console.timeEnd('bucle');

let suma2 = 0;

console.time('bucle2');

for (let j = 0; j < 100000000; j++) {
    suma += 1;
    
}
console.timeEnd('bucle2');

console.time('asincrono');
console.log('Empieza el proceso asincrono');
asincrona()
.then(() => {
    console.timeEnd('asincrono');
})

console.timeEnd('Todo');

function asincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('termina el proceso asíncronico');
            resolve();
        })
    })
}
