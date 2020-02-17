function myConcat(arr, ...rest) {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        answer[i] = arr[i];
    }

    for (let i = 0; i < rest.length; i++) {
        if (Array.isArray(rest[i])) {
            for (let j = 0; j < rest[i].length; j++) {
                answer[answer.length] = rest[i][j];
            }
        } else {
            answer[answer.length] = rest[i];
        }
    }

    return answer;
}

let a = [1, 2, 3];

let b = 'hello';

c = {c: 3, d: 4};

let d = [true, 'world', {a: 1, b: 2}, c];

let e = [4, 5, 6];

let f = [7, 8, [1,2,3]];

console.log(myConcat(a, c, b, e, f));
c.c = 'HELLO';
console.log(a);
