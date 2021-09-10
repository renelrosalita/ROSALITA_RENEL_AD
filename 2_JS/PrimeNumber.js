var isPrime;
const prompt = require('prompt-sync');
const num = prompt('Enter a number: ');
number = Number(num);

if (number === 1) {
    isPrime = false;
} else if (number === 2) {
    isPrime = true;
} else {
    for (var x = 2; x < number; x++) {
        if (number % x === 0) {
            isPrime = flase;
            break
        } else {
            isPrime = true;
        }
    }
}
console.log(` ${number} is a prime number? ${isPrime}`);