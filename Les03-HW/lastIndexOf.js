function mylastIndexOf(str, letter, strLength = str.length) {
    strLength = strLength > str.length ? str.length : strLength;
    const arrOfLetters = [];
    let answer = -1;

    for (let i = str.length - 1; i >= 0; i--) {
        arrOfLetters.push(str[i]);
    }

    if (strLength === str.length) {
        for (let i = 0; i < strLength; i++) {
            if (arrOfLetters[i] === letter[0]) {
                answer = strLength - (i + 1);
                break;
            } 
        }
    } else {
        for (let i = 0; i < str.length; i++) {
            if (arrOfLetters[i] === letter[0]) {
                answer = i > strLength ? -1 : i;
                break;
            } 
        }
    }

    return answer;
}

let sentenceOne = 'Who told that';
let sentenceTwo = 'Why you';

let str = "Hello planet earth, you are a great planet.";

console.log(str.lastIndexOf("you"));
console.log(mylastIndexOf(str, 'you'));

console.log(sentenceOne.lastIndexOf('o'));
console.log(mylastIndexOf(sentenceOne, 'o'));

console.log(sentenceOne.lastIndexOf('y'));
console.log(mylastIndexOf(sentenceOne, 'y'));

console.log(sentenceTwo.lastIndexOf('y'));
console.log(mylastIndexOf(sentenceTwo, 'y'));