// Define a function sum() and a function multiply() 
//that sums and multiplies (respectively) 
//all the numbers in an array of numbers

function sum(arr) {
    const result = arr.reduce((x, y) => x + y, 0);
    return result;
}

function multiply(arr) {
    const result = arr.reduce((x, y) => x * y, 1);
    return result;
}

// Define a function reverse() that computes the reversal of a string.
function reverse(str) {
    return str.split('').reverse().join('');
}

// Write a function filterLongWords() that takes an array of words 
//and an integer i and returns the array of words that are longer than i.
function filterLongWords(words, len) {
    return words.filter(s => s.length > len);
}