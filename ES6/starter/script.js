// This is about let and const

//ES 5

/* var name5 = 'Jane Smith';
var age5 = 23;

name5 = 'Jane Miller';

console.log(name5); */

//ES 6

/* const name6 = 'Jane Smith';
let age6 = '24';

name6 = 'Jane Miller'

console.log(name6); */

/////////////////////////////////////////////

// Blocks and IIFEs

{
    const a = 1;
    let b = 2;

}


////////////////////////////////////////////////
//Strings

let firstName = 'John';
let lastName = 'Smith';

function calcAge(year) {
    return 2019 - year;
}

//ES5
console.log('This is' + firstName + ' ' + lastName);

//ES6
console.log(`This is ${firstName} ${lastName}`)


////////////////////////////////////////////////
// Arrow functions and lexical this keywork


//when method of the object is called then 'this' keyword points that object, but when normal function is called, then
//then 'this' keyword points to the global variable that is window

//so the callback is normal function so if it is not arrow function then this points to the global environemtn

// but when it is changed to the arrow function then it shares the lexical scope of the surrounding
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            var str = `this is box ${this.position} having color ${this.color}`;
            alert(str);
        })
    }
}

box6.clickMe();