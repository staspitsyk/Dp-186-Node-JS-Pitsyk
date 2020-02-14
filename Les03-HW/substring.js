function mySubstring(str, start, end = str.length) {
    if (start === end) return '';

    if (start <= 0 || isNaN(start)) start = 0;

    if (end <= 0 || isNaN(end)) end = 0;

    if (start > str.length) start = str.length;

    if (end > str.length) end = str.length;

    if (start > end) {
        const coppyStart = start;
        start = end;
        end = coppyStart;
    }
    let answer = '';

    for (let i = start; i < end; i++) {
        answer += str[i]
    }

    return answer;
}

let str = 'Hello world from Stan';


console.log(str.substring(1, 7));
console.log(mySubstring(str, 1, 7));

console.log(str.substring(7, 1));
console.log(mySubstring(str, 7, 1));

console.log(str.substring(NaN, 12));
console.log(mySubstring(str, NaN, 12));

console.log(str.substring(4, 70));
console.log(mySubstring(str, 4, 70));
