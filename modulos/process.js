// const process = require('process'); <-- No es necesario porque ya esta en el paquete global por defecto

process.on('beforeExit', () => {
    console.log('Ale, el proceso va a terminar');
});

process.on('exit', () => {
    console.log('Ale, el proceso acabó');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    },0);
});

setTimeout(() => {
    console.log('Esto si se va a ver');
},0);

process.on('uncaughtException', (err, origen) => {
    console.log('Vaya se nos ha olvidado capturar un error'); 
    console.error(err); 
}); 

//funcionquenoexiste();

console.log('Esto si el error no se recoje, no sale');
