// @ts-check
function greeting() {
    let username = 'Ander'; // alcance: esta función
    console.log(username);
    
    if ( username === 'Ander' ) console.log(`Hello ${username}`);
}

greeting();
