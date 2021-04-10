const fahrenheitToCelsius = (val) => { 
    return Math.round(((val - 32) * (5/9)) * 100) / 100;
};

module.exports = { fahrenheitToCelsius };