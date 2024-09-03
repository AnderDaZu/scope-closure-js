
function greeting(){
    let username = 'Ander';
    function displayUsername(){
        return `Hello: ${username}`;
    }
    return displayUsername;
}

const g = greeting();
console.log(g); // muestra la definición de la función
console.log(g()); // muestra el mensaje de saludo con el nombre de la variable
