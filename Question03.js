// 
// Question: Write a function sortNumbers that takes an array of numbers as input and returns a
// new array with the numbers sorted in ascending order.
// 

// Answer

function sortNumbers(arr) {

    return arr.slice().sort((a, b) => a - b);
}


const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);
