
// Question: Write a function fibonacci that takes an integer n as input and returns the n-th
// number in the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each
// subsequent number is the sum of the previous two.



// Answer








function fibonacci(n) {

    if (n === 0) return 0;
    if (n === 1) return 1;


    let a = 0;
    let b = 1;
    let result;


    for (let i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }


    return result;
}


const nthFibonacci = fibonacci(10);
console.log(nthFibonacci); 
