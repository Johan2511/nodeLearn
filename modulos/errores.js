function otraFuncion() {
    serompe();
}



function serompe() {
    return 3 + Z;
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + Z
            
        } catch (error) {
            console.log('Error en mi función asincrona');
            cb(error);
        }
    })
}

try {
    // serompe();
    seRompeAsincrona(function(error) {
        console.log(error.message);
    });
} catch(err) {
    console.error('Vaya, algo se ha roto...');
    console.error(err.message)
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('Esto de aqui esta al final');