function calculate(str) {
    const operand = str.match(/[+,\-,*,/]/)[0];
    let firstOperand = str.split(/[+,\-,*,/]/)[0];
    let secondOperand = str.split(/[+,\-,*,/]/)[1];

    const transformInBase10 = function(ancientStr) {
        const arrOfSymbols = ancientStr.split('');
        const len = arrOfSymbols.length;
        const arrOfDigits = [];
        let ancientSymbol = '';
    
        for (let i = 0; i < len; i++) {
            if (arrOfSymbols[i] === '@') {
                ancientSymbol += arrOfSymbols[i];
    
                if (arrOfSymbols[i + 1] !== '@') {
                    arrOfDigits.push(ancientSymbol.length);
                    ancientSymbol = '';
                }
            } else {
                if (arrOfSymbols[i + 1] === '~') {
                    ancientSymbol += '0'
                } else {
                    arrOfDigits.push(ancientSymbol);
                    ancientSymbol = '';
                }
            }
        }
        return +arrOfDigits.join('');
    };
    
    firstOperand = transformInBase10(firstOperand);
    secondOperand = transformInBase10(secondOperand);

    const operandOptions = {
        '+': firstOperand + secondOperand,
        '-': firstOperand - secondOperand,
        '*': firstOperand * secondOperand,
        '/': firstOperand / secondOperand,
    };
    
    let result = operandOptions[operand];

    const transformInAncientStr = function(number) {
        number = String(number);
        const len = number.length;
        let ancientStr = '';

        for (let i = 0; i < len; i++) {
            if (number[i] !== '0') {
                ancientStr += '@'.repeat(+number[i]);
                ancientStr += i === len - 1 ? '' : '~';
            } else {
                ancientStr += '~';
            }
        }

        return ancientStr;
    };

    return transformInAncientStr(result);
}

const str1 = "@~@@*@@";
const str2 = "@~@@+@@~~";

console.log(calculate(str1));
console.log(calculate(str2));
