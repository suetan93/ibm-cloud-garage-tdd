const primeFactors = (num) => {

    let result = [];
    while (num % 2 === 0) {
        result.push(2)
        num = num / 2
    }

    for (let i = 3; i <= Math.sqrt(num); i+=2) {
        while (num % i === 0) {
            result.push(i)
            num = num / i
        }
    }

    if(num > 2) result.push(num);

    return result;
   
    // let factors = [];
    // if (num > 1) {
    //     while (num % 2 === 0) {
    //         factors.push(2)
    //         num /= 2
    //     }

    //     while (num % 3 === 0) {
    //         factors.push(3);
    //         num /= 3;
    //     }
    // }

    // if (num >1) factors.push(num)
    // return factors;
}

module.exports = { primeFactors }