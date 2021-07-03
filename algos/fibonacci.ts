import { performance } from 'perf_hooks';

// naive approach via recursion O(exp)
const recursiveFib = (n: number): number => {
    if (n > 1) {
        return recursiveFib(n - 1) + recursiveFib(n - 2);
    }
    else return 1;
}

// call stack optimised recursive approach O(exp)

const fibArr = [0, 1];
const optimisedRecursiveFib = (n: number) => {
    if (n > 1) {
        if (fibArr[n])
            return fibArr[n];
        else {
            fibArr[n] = optimisedRecursiveFib(n - 1) + optimisedRecursiveFib(n - 2);
            return fibArr[n];
        }
    } else return 1;
}

// looping for linear time O(n)
const linearFib = (n: number): number => {
    for (let i = 2; i < n + 1; i++) // calculate fib till nth element
    {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1]
    }
    return fibArr[n];
}

// to optimise space we can store only last two nos. instead of having array O(n)
const spaceOptimisedLinearFib = (n: number): number => {
    let a = 0; let b = 1; let sum = 0;
    while (n >= 2) // calculate fib till nth element
    {
        sum = a + b;
        a = b;
        b = sum;
        n--;
    }
    return sum;
}

// for constant time use formula ((sqrt(5)+1)/2)^n)/sqrt(5) O(1)
const constantTimeFib = (n: number): number => {
    let x = (Math.sqrt(5) + 1) / 2;
    let y = Math.pow(x, n) / Math.sqrt(5);
    return Math.round(y);
}

console.log('naive recursive fib');
const a = performance.now();
console.log(recursiveFib(35))
const b = performance.now();
console.log(b - a);

console.log('opt recursive fib');
const c = performance.now();
console.log(optimisedRecursiveFib(35))
const d = performance.now();
console.log(d - c);

console.log('linear fib');
const e = performance.now();
console.log(linearFib(35))
const f = performance.now();
console.log(f - e);

console.log('space opt linear fib');
const g = performance.now();
console.log(spaceOptimisedLinearFib(35))
const h = performance.now();
console.log(h - g);

console.log('constant fib');
const x = performance.now();
console.log(constantTimeFib(35))
const y = performance.now();
console.log(y - x);