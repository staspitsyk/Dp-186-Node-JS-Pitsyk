function myShift(arr) {
    const answer = arr.length ? arr[0] : undefined;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    delete arr[arr.length];
    if (arr.length) arr.length -= 1;
    return answer;
}

const arr = [];
const arr2 = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr);
// console.log(arr.length);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.length);

// console.log(arr2);
// console.log(arr2.length);
// console.log(arr2.shift());
// console.log(arr2);
// console.log(arr2.length);

console.log(arr);
console.log(arr.length);
console.log(myShift(arr));
console.log(arr);
console.log(arr.length);

console.log(arr2);
console.log(arr2.length);
console.log(myShift(arr2));
console.log(arr2);
console.log(arr2.length);
