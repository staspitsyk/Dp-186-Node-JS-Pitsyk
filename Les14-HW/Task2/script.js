function findPartMaxProd(number) {
    const objOfOptions = {};

    let arr = [1, 1];
    let sliceIndex = 1;
    let mutable = arr.slice(0, sliceIndex);
    let numberAtSliceIndex = arr[sliceIndex];
    let immutable = arr.slice(sliceIndex + 1);

    while (sliceIndex < number) {
        let checkedArr = mutable.concat(numberAtSliceIndex, immutable);
        let sum = checkedArr.reduce((a, b) => a + b, 0);

            while(numberAtSliceIndex + arr.length - 1 < number) {
                checkedArr = mutable.concat(numberAtSliceIndex, immutable);
                sum = checkedArr.reduce((a, b) => a + b, 0);
                if (sum === number) {
                    const mult = checkedArr.reduce((a, b) => a * b, 1);
                    objOfOptions[checkedArr] = mult;
                    numberAtSliceIndex++;
                }
                for (let i = 0; i < mutable.length; i++) {
                    checkedArr = mutable.concat(numberAtSliceIndex, immutable);
                    sum = checkedArr.reduce((a, b) => a + b, 0);

                    if (sum === number) {
                        const mult = checkedArr.reduce((a, b) => a * b, 1);
                        objOfOptions[checkedArr] = mult;
        
                        mutable = mutable.map(n => n = 1);
                    }

                    mutable[i] += 1;
                    checkedArr = mutable.concat(numberAtSliceIndex, immutable);
                    sum = checkedArr.reduce((a, b) => a + b, 0);
        
                    if (sum === number) {
                        const mult = checkedArr.reduce((a, b) => a * b, 1);
                        objOfOptions[checkedArr] = mult;
        
                        numberAtSliceIndex += 1;
                        mutable = mutable.map(n => n = 1);
                    }
                }

            }

            checkedArr = mutable.concat(numberAtSliceIndex, immutable);
            sum = checkedArr.reduce((a, b) => a + b, 0);

            if (sum === number) {

                const mult = checkedArr.reduce((a, b) => a * b, 1);
                objOfOptions[checkedArr] = mult;
            }
                sliceIndex++;
                arr.push(1);
                mutable = arr.slice(0, sliceIndex);
                numberAtSliceIndex = arr[sliceIndex];
                immutable = arr.slice(sliceIndex + 1);
    }

    let max = 0;
    let maxArr;
    let answer = [];

    for (let key in objOfOptions) {
        if (objOfOptions[key] > max) {
            max = objOfOptions[key];
            maxArr = key.split(',');
        }
    }

    answer.push(maxArr);

    for (let key in objOfOptions) {
        if (max === objOfOptions[key] && key !== maxArr.join(',')) {
            answer.push(key.split(','));
        }
    }

    answer = answer.map(arr => arr.sort().join(''));

    const set = new Set(answer);

    answer = [];

    set.forEach(str => answer.push(str.split('')));

    answer.push(max);

    console.log(objOfOptions);

    return answer;
}

console.log(findPartMaxProd(8));
console.log(findPartMaxProd(10));
