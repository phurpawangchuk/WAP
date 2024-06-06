window.onload = function () {

    var Person = function(){}

    Person.prototype.initialize = function(name,age){
        this.name = name;
        this.age = age;
    }

    Person.prototype.describe = function(){
        return (`Name: ${this.name}, Age: ${this.age}`);
    }

    //Teacher constructor
    var Teacher = function(){}
    
    //extends from Person
    Teacher.prototype = new Person();

    //Add teach() to Teacher
    Teacher.prototype.teach = function(subject){
        return (`${this.name} is now teaching ${subject}`);
    }

    var teacher  = new Teacher();
    teacher.initialize("Michael", 35);
    console.log(teacher.teach("WAP"));


    var Student = function(){}
    Student.prototype = new Person();//Object.create(Person.prototype);
    Student.prototype.learn = function(subject){
        console.log(`${this.name} learnt ${subject}`)
    }

    var person = new Person();
    person.initialize("Alice Bob", 34);
    console.log(person.describe());

    var std = new Student();
    std.initialize("Marley", 45);
    console.log(std.learn("C++"))

//Q1:
const count = (function(){
    var counter = 0;
    const addFunction = function(){
        counter += 1;
    };

    const resetFunction = function(){
        counter = 0;
    };

    return {
        add: addFunction,
        reset: resetFunction
    }
})();

//Q2. 
//counter is the free variable
//Free variable are the variable which are not defined inside the method and 
//it is not in the function parameter

//Q3.
const make_adder = (function(){
    var counter = 0;
     return function(inc){
        return function(){
           return counter += inc;
       }
    }
})();

var add5 = make_adder(5);
add5();
add5();
console.log(add5()); //15

//Q4
//By implementing IIFE (Immediately Invoke Function Expression) can help to remove declaration of all global variables and functions

//Q5
const employee = (function(){
    const name='', age=30,salary=0.0;

    const getNameFunction = function(){
        return this.name;
    };

    const getAgeFunction = function(){
        return this.age;
    };

    const getSalaryFunction = function(){
        return this.salary;
    };

    const setNameFunction = function(name){
        this.name = name;
    };

    const setAgeFunction = function(age){
        this.age = age;
    };

    const setSalaryFunction = function(salary){
        this.salary = salary;
    };

    const increaseSalaryFunction = function(percentage) {
        this.salary += this.salary * percentage;
    };

    const incrementAgeFunction = function(){
        this.getAge();
    }
    return {
        getName: getNameFunction,
        getAge : getAgeFunction,
        getSalary: getSalaryFunction,
        setName: setNameFunction,
        setAge: setAgeFunction,
        setSalary: setSalaryFunction,
        increaseSalary: increaseSalaryFunction,
        incrementAge: incrementAgeFunction
    };
})();


// Q6
employee.extension = function(){
    var address;

    const getAddressFunction = function(){
        return this.address;
    };

    const setAddressFunction = function(address){
        this.address = address;
    }

    return {
        getAddress: getAddressFunction,
        setAddress: setAddressFunction
    }
};

//Implementing Inheritance 
//Shape constructor 
function Shape(x, y){
   this.x = x;
   this.y = y;
}
Shape.prototype.findDistance = function(){
    return this.x * this.y;
}
//Square constructor
function Square(x,y,w,h){
    Shape.call(this,x,y); //3 paramters
    this.w = w;
    this.h = h;
}
//square extends Shape
Square.prototype = Object.create(Shape.prototype);
Square.prototype.findArea = function(){
    return this.w * this.h;
}
Square.prototype.findPerimeter = function(){
    return this.w + this.h;
}

//Rect extends rom Shape
function Rectangle(x,y,l,b){
    Shape.call(this,x,y);
    this.l = l;
    this.b = b;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.findArea = function() {
    return this.l * this.b;
}
Rectangle.prototype.findPerimeter = function() {
    return this.l * this.b;
}

const square = new Square(5,5,6,6);
console.log("Area a===",square.findArea());
console.log("Perimter ===",square.findPerimeter());

console.log("Distance===",square.findDistance());

const rectangle = new Square(4,4,7,7);
console.log("Area: ", rectangle.findArea());
console.log("Perimeter: ",rectangle.findPerimeter());

//Sample Question
function Cookie(size){
    this.size = size;
}

Cookie.prototype.eat = function() {
    console.log(`eating cookie of size ${this.size}`);
}

function ChocolateCookie(size,numberOfChips){
    Cookie.call(this,size);
    this.numberOfChips = numberOfChips;
}

ChocolateCookie.prototype = Object.create(Cookie.prototype);
ChocolateCookie.prototype.judge = function(){
    if(this.numberOfChips < 5){
        console.log(`Not a lot of chokolate`)
    }else{
        console.log(`It looks delicious`);
    }
}

const cookie = new ChocolateCookie(2,4);
cookie.eat();
cookie.judge();


//Reveling module pattern syntax
const moduleName = (function(){
    let privateCounter = 0;
    const privateFunction = function(){
        privateCounter += 1;
    };
    const publicFunction = function(){
        privateFunction();
    };

    return {
        privateMethod: privateFunction,
        publicMethod: publicFunction,
        counter: function() {
                return privateCounter;
        } 
    };
})();

moduleName.publicMethod();
moduleName.publicMethod();

console.log(moduleName.counter());

}
