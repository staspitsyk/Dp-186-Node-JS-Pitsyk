function HowManyBitsInNumber(num) {
    let arrOfZerosAndOnes = [];
    let answer;

    while (true) {
        if (num % 2 === 1) {
            num = (num / 2) - 0.5;
            arrOfZerosAndOnes.push(1);
        } else {
            num = num / 2;
            arrOfZerosAndOnes.push(0);
        }
        if (num === 1) {
            arrOfZerosAndOnes.push(1);
            break;
        }
    }
    arrOfZerosAndOnes = arrOfZerosAndOnes.filter(n => n === 1);
    answer = arrOfZerosAndOnes.length;

    return answer;
}

console.log(HowManyBitsInNumber(1234));
console.log(HowManyBitsInNumber(7773661));
