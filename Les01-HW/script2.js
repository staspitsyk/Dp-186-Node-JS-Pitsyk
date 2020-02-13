function SortWordsInOrder(str) {
    const findSolution = function(str) {
        const arrOfWords = str.split(' ');
        let arrOfnumbers = arrOfWords.slice();
        let sortedArr = [];
        const regexp = /\d/;
        let answer;
        arrOfnumbers = arrOfnumbers.map(word => +word.match(regexp)[0]);

        for (let i = 0; i < arrOfWords.length; i++) {
            sortedArr[arrOfnumbers[i] - 1] = arrOfWords[i];
        }

        answer = sortedArr.join(' ');

        return answer;
    }

    if (!str) {
        return '';
    } else {
        return findSolution(str);
    }
}

console.log(SortWordsInOrder('Thi1s is2 3a T4est'));
console.log(SortWordsInOrder('4of Fo1r pe6ople g3ood th5e the2'));
