//-------------------------------------------------Function contructor---------------------------------------------

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}

//There are different ways to create Blueprint but most famous is using function constructor

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}


Person.prototype.calculateAge = function () {
    console.log(2018 - this.yearOfBirth)
}

//create john object

var john = new Person('John', 1990, 'teacher');

//Question - what new Operator does
//1) when we do new a empty object is created
//2) contructor function is called(Person in this case)
//3) on calling a function a execution context is created which contains this operator, which usually points to global object
//4)new operator takes care of this in constructor function context. New operator will make this operator points to the new empty object created
// by doing new

john.calculateAge();


//------------------------------------------------------------Object.create----------------------------------------------------
//1. First define an object that will act as a prototype
//2. Create a new Object based on the prototype

var personProto = {
    calculateAge: function () {
        console.log(2019 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1990 }
})

//-------------------------------------------------Primitive and Object-----------------------------------------------------------
//1. Primitives variable actually hold the data whereas in object variable actually holds the reference pointing to object in the memory.

var a = 23;
var b = a;
//mutating a
a = 46;

console.log(a); //46
console.log(b); //23

var obj1 = {
    name: 'John',
    age: 25
}
var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age) //30
console.log(obj2.age) //30

//obj1 and obj2 holds the reference to the same memory location


//----------------------------------Functions--------------------------------
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a, b) {
    a = 30;
    b.city = 'San Francisco'
}

change(age, obj);
//output age will be 27 only but city will change to San Francisco as primitive data type is passed by value 
//where as obj is passed by reference.

//---------------------------------------Passing function as argument------------------------------

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];

    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))
    }

    return arrRes;
}

function calculateAge(year) {
    return (2019 - year);
}

//----------------------------------------Function returning function-------------------------------

function interviewQuestions(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explan what UX design is?')
        }
    } else if (job == 'teacher') {
        return function (name) {
            console.log(name + ', what subject do you teach?')
        }
    } else {
        return function (name) {
            console.log("Hello" + name + ' What do you do?')
        }
    }
}

var teacherQuestion = interviewQuestions('teacher');

teacherQuestion('Sanchit');