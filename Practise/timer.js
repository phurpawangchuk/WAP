// console.log("hello")
// setTimeout(hello, 5000);
 
// function hello(){
// console.log(" world");
// }

// function foo(){
//     console.log('foo')
// }

// process.nextTick(foo);
// console.log('bar');

//nextTick execute before timer event
setTimeout(() => { console.log("setTimeout")}, 10);
setImmediate(() => { console.log("setImmediate")},0);
process.nextTick(() => {console.log("nextTick")}, 100);




