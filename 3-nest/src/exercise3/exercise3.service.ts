import { Injectable } from '@nestjs/common';

@Injectable()
export class Exercise3Service {

    helloWorld(name:string){
        return "Good Day Sir Dan! I'm "+name;
    }

    loopsTriangle(height: number){
        for (var i = 1; i <= height; i++){
            var string = '';
            var j = i;
            while (j) {
                string += '*';
                j--;
            }
            console.log(string);
        }
        return;
    }

    primeNumber(parsedNumber: number){
        if (parsedNumber === 1){
            return `The number ${parsedNumber} is neither prime nor composite.`;
        } else if (parsedNumber === 2) {
            return `The number ${parsedNumber} is a prime number.`;
        } else {
            for (var x = 2; x < parsedNumber; x++){
                if (parsedNumber % x === 0) {
                    return `The number ${parsedNumber} is not a prime number.`;
                } else {
                    return `The number ${parsedNumber} is a prime number.`;
                }
            }
        }
    }

}
