function hola(nombre, micallback) {
    
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        micallback(nombre);
    },1500)
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios', nombre);
        otroCallback();
    }, 1000)
}

console.log('iniciando proceso...');
hola('Johan', function (nombre) {
    adios(nombre, function () {   
        console.log('Terminando Proceso...');
    })
});

// hola ('johan', function () {})
// adios ('johan', function () {})