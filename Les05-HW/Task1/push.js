function myPush(arr, ...rest) {
    for (let i = 0; i < rest.length; i++) {
        arr[arr.length] = rest[i];
    }

    return arr.length;
}

let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr);
// console.log(arr.push('f','g','a','b'));
// console.log(arr);
// console.log(arr.length);

console.log(arr);
console.log(myPush(arr, 'f','g','a','b'));
console.log(arr);
console.log(arr.length);
