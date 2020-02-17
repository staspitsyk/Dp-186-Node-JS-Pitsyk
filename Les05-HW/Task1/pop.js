function myPop(arr) {
    const answer = arr.length ? arr[arr.length - 1] : undefined;
    delete arr[arr.length - 1];
    if (arr.length) arr.length -= 1;

    return answer;
}

let arr = [];
let arr2 = ['a', 'b', 'c', 'd', 'e'];

console.log(arr);
console.log(myPop(arr));
console.log(arr);
console.log(arr.length);

console.log(arr2);
console.log(myPop(arr2));
console.log(arr2);
console.log(arr.length);