const primeFactors = (num) => {
    let result = [];
    while (num % 2 === 0) {
        result.push(2)
        num = num / 2
    }

    for (let i = 3; i <= Math.sqrt(num); i+=2) {
        while(n % i === 0) {
            result.push(i)
            n = n / i
        }
    }

    if(num > 2) result.push(num);

    return result;
}

module.exports = { primeFactors }