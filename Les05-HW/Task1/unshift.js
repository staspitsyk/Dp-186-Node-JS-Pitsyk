function myUnshift(arr, ...rest) {

    for (let i = 0; i < arr.length; i++) {
        rest[rest.length] = arr[i];
    }

    for (let i = 0; i < rest.length; i++) {
        arr[i] = rest[i];
    }

    return rest.length;
}

const arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr);
// console.log(arr.length);
// console.log(arr.unshift('f','g','a','b'));
// console.log(arr);
// console.log(arr.length);

console.log(arr);
console.log(arr.length);
console.log(myUnshift(arr,'f','g','a','b'));
console.log(arr);
console.log(arr.length);