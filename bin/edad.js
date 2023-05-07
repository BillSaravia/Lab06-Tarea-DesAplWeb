function edad()
{
    const birthYear = 2003;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    console.log(`Tu edad actual es: ${age} años.`);
}    
module.exports = {edad}