//Q1
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// readline.question('What is your name? ', name => {
//     console.log(`Welcome ${name}`);
//        readline.question('What is your age? ', age => {
//             if(age < 16){
//                 console.log(`${name}, You’re not allowed to drive in Iowa`);
//             }else{
//                 console.log(`${name}, You’re allowed to get a drivers license in Iowa`);
//             }
//             readline.close();
//        });
// });

//Q2
let sum = 0;
function getNumbers() {
    readline.question('Enter a number (type "stop" to finish): ', input => {
        if (input === 'stop') {
            console.log(`Sum of numbers is ${sum}`);
            readline.close();
        } else {
            sum +=  parseInt(input);;
            getNumbers(); 
        }
    });
}
getNumbers();