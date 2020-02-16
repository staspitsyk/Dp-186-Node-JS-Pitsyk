const myLength = function(str) {
    const result = str.match(/'/g);
    const length = result ? str.length - result.length : str.length;
    return length;
};

function findSecretMessage(str) {
    str = str.replace(/[,"]/g, '');
    let arrOfSentences = str.split(/[.?!]/);
    const arrOfArrs = [];
    if (arrOfSentences[arrOfSentences.length - 1] === "") arrOfSentences.pop();
    arrOfSentences = arrOfSentences.map(sentence => sentence.trim());

    arrOfSentences.forEach(sentence => arrOfArrs.push(sentence.split(' ')));

    let secretMessage = ``;

    const makeSecretMessage = function(arr) {
        const firstSentence = arr[0];
        const otherSentences = arr.slice(1);

        firstSentence.forEach((word, index) => {
            const len = myLength(word);
            if (index === 0) {
                const firstLetter = otherSentences[index][len - 1][0].toUpperCase();
                const otherPartOfTheWord = otherSentences[index][len - 1].slice(1);
                secretMessage += `${firstLetter}${otherPartOfTheWord} `;
            } else if (index === firstSentence.length - 1) {
                secretMessage += `${otherSentences[index][len - 1]}. `;
            } else {
                secretMessage += `${otherSentences[index][len - 1]} `;
            }
        });
        if (arr[0].length === arr.slice(1).length) {
            return;
        } else {
            arr =  arr.slice(firstSentence.length + 1);
            return makeSecretMessage(arr);
        }
    };
    makeSecretMessage(arrOfArrs);

    secretMessage = secretMessage.trim();

    return secretMessage;
}

const letter = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse! The, "mission" to try and seduce her was a complete failure last month? By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.';

const message2 = 'Full he. Uncommonly surrounded considered hello him are its. It there is read good soon. My to. Did general dashwoods deficient man concluded additions resources. Or Kenobi packages overcame distance smallest in recurred.';

const message3 = 'Death weeks early. Hearted forbade on an for ye in fifteen. Age attended betrayed her the man raptures laughter. Instrument terminated of as Horde astonished literature motionless admiration. The affect. Are determine loktar how performed intention discourse but. On merits on so valley ogar indeed assure of. Has. Particular boisterous thromka uncommonly are.'

console.log(findSecretMessage(letter));
console.log(findSecretMessage(message2));
console.log(findSecretMessage(message3));
