//Export Method 1
// module.exports.drive = function() {
//     console.log("The car moves forward");
// }

// module.exports.turn = function(degrees) {
//     console.log(`The car turns ${degrees}`);
// }

// module.exports.break = function() {
//     console.log("the car stops");
// }

// //Alternative export
// function drive(){
//     console.log("The car moves forward");
// }
// function turn(degrees){
//     console.log(`The car turns ${degrees}`);
// }
// function breakme(){
//     console.log("the car stops");
// }
// module.exports = { drive, turn, breakcar }

//Export using FP 
const drive = () => { console.log("The car moves forward"); };
const turn = (degrees) => { console.log(`The car turns ${degrees}`); };
const breakcar = () => { console.log("The car stops"); };

module.exports = { drive, turn, breakcar }