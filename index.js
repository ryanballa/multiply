const nodeFlags = require('node-flag');

const multiply = (primNumbs) => {

    const primaryNumbers = primNumbs || 10;
    let numbers = {};

    for (let i = 0; i <= primaryNumbers; i++) {
        let multiplyRow = {};
        let multiplyRowValues = [];
        for (let im = 0; im <= 10; im++) {
            multiplyRowValues.push(i * im);
        }
        multiplyRow[i] = multiplyRowValues;
        numbers[i] = multiplyRowValues;
    }

    if (!nodeFlags.isset('isQuiet')) {
        process.stdout.write(JSON.stringify(numbers));
    }
    return JSON.stringify(numbers);
}

multiply();

module.exports = { multiply };