const checkPrime = (n: number): boolean => { // O(sqrt(n))
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}

console.log(checkPrime(10));