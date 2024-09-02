// variables

var a; // declarar variable
var b = 10; // declarar y asignar variable
b = 11; // reasignar variable
var b = 10; // redeclarar variable

// global scope
var fruit = 'Apple';
function bestFruit(){
    console.log(fruit);
}
bestFruit();

function countries(){
    country = 'Colombia';
    console.log(country);
}
countries();
console.log(country);