function mySubstr(str, start, len = str.length) {
    if (start >= str.length) return '';

    let answer = '';

    if (start < 0) {
        start = str.length - (-start);
        len = len === str.length ? str.length : len;

        if (len === str.length) {
            for (let i = start; i < str.length; i++) {
                answer += str[i];
            }
        } else {
            for (let i = start; i < start + len; i++) {
                answer += str[i];
            }
        }

    } else {
        for (let i = start; i < start + len; i++) {
            answer += str[i];
        }
    }

    return answer;
}

const str = 'Hello world from Stan';

console.log(str.substr(2, 5));
console.log(mySubstr(str, 2, 5));

console.log(str.substr(6, 2));
console.log(mySubstr(str, 6, 2));

console.log(str.substr(35));
console.log(mySubstr(str, 35));

console.log(str.substr(-5));
console.log(mySubstr(str, -5));

console.log(str.substr(-9, 2));
console.log(mySubstr(str, -9, 2));
