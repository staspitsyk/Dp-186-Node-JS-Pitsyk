function myRepeat(str, times) {
    times = Math.floor(times);
    if (times < 0 || times === Infinity || times === -Infinity) {
        return 'Entered number should be positive and should not be equal +/- Infinity';
    } else if (times === 0) {
        return '';
    } else {
        let answer = '';
        for (let i = 0; i < times; i++) {
            answer += str;
        }
        return answer;
    }
}

let str = 'Hello';

console.log(str.repeat(3));
console.log(myRepeat(str, 3));

console.log(str.repeat(4.6));
console.log(myRepeat(str, 4.6));