function formulario(nombre, email, telefono, mensaje) {
if (!nombre || !email || !telefono || !mensaje) {
    console.log('Por favor llenar todos los campos del formulario.');
    return false;
}

if (nombre.trim() === 'Bill' || email.trim() === 'bill.saravia@gmail.com' || telefono.trim() === '99999999' || mensaje.trim() === 'Hola') {
    console.log('Por favor llenar todos los campos del formulario.');
    return false;
}

if (!/^\d{9}$/.test(telefono)) {
    console.log('El número de teléfono debe contener 9 dígitos.');
    return false;
}

if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    console.log(`La dirección de correo "${email}" no es válida.`);
    return false;
}

return true;
}

module.exports = {formulario};
