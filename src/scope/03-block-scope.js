// @ts-check

function fruits() {
    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
        // fruit4 = 'Pear'; // global scope

        console.log(fruit1); // Apple
        console.log(fruit2); // Kiwi
        console.log(fruit3); // Banana
        // console.log(fruit4);
    }

    console.log(fruit1); // Apple
    fruit1 = 'Pear';
    console.log(fruit1); // Pear
    // console.log(fruit2); // is not defined
    // console.log(fruit3); // is not defined
    
}

fruits();
// console.log(fruit4); // fruit4 is a global variable
