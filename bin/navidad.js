function navidad()
{

const today = new Date();
const navidad = new Date("December 25, 2023");

const daysLeft = Math.round((navidad - today) / (1000 * 60 * 60 * 24));

console.log(`Faltan ${daysLeft} días para Navidad.`);

}

module.exports = {navidad}