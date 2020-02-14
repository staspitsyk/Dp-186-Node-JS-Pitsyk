function mylastIndexOf(str, letter, strLength = str.length) {
    strLength = strLength > str.length ? str.length : strLength;
    const arrOfLetters = [];
    let answer;

    for (let i = strLength - 1; i >= 0; i--) {
        arrOfLetters.push(str[i]);
    }

    for (let i = 0; i < strLength; i++) {
        if (arrOfLetters[i] === letter[0]) {
            answer = strLength - (i + 1);
            break;
        } else {
            answer = -1;
        }
    }

    return answer;
}

let sentenceOne = 'Who told that';
let sentenceTwo = 'Why you';

let str = "Hello planet earth, you are a great planet.";

console.log(str.lastIndexOf("planet"));
console.log(mylastIndexOf(str, 'planet'));

console.log(sentenceOne.lastIndexOf('o'));
console.log(mylastIndexOf(sentenceOne, 'o'));

console.log(sentenceOne.lastIndexOf('y'));
console.log(mylastIndexOf(sentenceOne, 'y'));

console.log(sentenceTwo.lastIndexOf('y'));
console.log(mylastIndexOf(sentenceTwo, 'y'));