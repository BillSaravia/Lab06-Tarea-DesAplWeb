const edad = require('./bin/edad')
const navidad = require('./bin/navidad')
const formulario = require('./bin/formulario')

module.exports = {
    edad,
    navidad,
    formulario
};

console.log(edad.edad())
console.log(navidad.navidad())
console.log(formulario.formulario({ name: 'Bill', email: 'bill.saravia@gmail.com', telefono: '99999999', mensaje: 'Hola'  })) // valida el formulario

