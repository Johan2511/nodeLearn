function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        },1500)
    });
}


function hablar(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla bla...');
            // resolve(nombre);
            reject('Hay un error');
        }, 1000)
    })
}

function adios(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios', nombre);
            resolve();
        }, 1000)
    })
}


//---

console.log('Iniciando el proceso..');
hola('Johan')
.then(hablar)
.then(hablar)
.then(hablar)
.then(nombre => {
    return adios(nombre);
})
.then((nombre) => {
    console.log('Terminado el proceso');
})
.catch(error => {
    console.log('Ha habido un error');
    console.log(error);
})