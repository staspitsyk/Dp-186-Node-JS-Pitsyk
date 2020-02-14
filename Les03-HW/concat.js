function myConcat() {
    let answer = '';

    arrLength = arguments.length;
    for (let i = 0; i < arrLength; i++) {
        answer += arguments[i];
    }

    return answer;
}

let a = 'Hello';
let b = 'from';
let c = 'Stan';

console.log(a.concat(b,c));
console.log(myConcat(a, b, c));