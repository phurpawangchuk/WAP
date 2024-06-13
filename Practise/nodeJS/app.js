const  play  = require('./play/index');
const util = require('util');

const Person = require('./Person');
const personObj = new Person();
personObj.name = 'Phurpa';
console.log(personObj.getName());

const person2 = new Person("Alice");
console.log(person2.getName());


// play.violin();
// play.clarinet();

play.playViolin();
play.playClarinet();


var hello = require('./helloModule');
hello();
util.log("Date :", util.format("%s", hello()));