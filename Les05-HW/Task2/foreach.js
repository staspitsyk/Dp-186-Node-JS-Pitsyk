const arr = ['Апельсин', 'Арбуз', 'Яблоко', 'Банан', 'Ананас', 'Груша'];

// console.log(arr.forEach((el, i, arr) => arr[i] = `${i + 1}: ${el};`));

// console.log(arr);

let a = arr.reduce((prev, next, index, arr) => {
    if (index === 1) {
        arr[index - 1] = `${index}: ${prev};`;
        arr[index] = `${index + 1}: ${next}:`;
    } else {
        arr[index] = `${index + 1}: ${next};`;
    }
});

console.log(arr);