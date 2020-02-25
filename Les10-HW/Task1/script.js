function isEqualToSum(arr, sum) {
    let arrOfAllOptions = [(arr[0] + arr[1]), (arr[0] - arr[1])];
    const len = arr.length;

    for (let i = 2; i < len; i++) {
        let coppyForMinus = arrOfAllOptions.slice();
        let coppyForPlus = arrOfAllOptions.slice();

        coppyForMinus = coppyForMinus.map(n => n - arr[i]);
        coppyForPlus = coppyForPlus.map(n => n + arr[i]);
        arrOfAllOptions = coppyForPlus.concat(coppyForMinus);
    }

    return arrOfAllOptions.includes(sum);
}

const arr1 = [1, 3, 4, 6, 8];
const arr2 = [15, 2, 3];
const arr3 = [1, 5, 3, 2, 5];

console.log(isEqualToSum(arr1, -2));
console.log(isEqualToSum(arr2, 10));
console.log(isEqualToSum(arr3, -2));
