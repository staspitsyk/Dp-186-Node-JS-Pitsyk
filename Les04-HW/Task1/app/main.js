import {
    cars
}  from './data.js';

function countColor(carsArr) {
    return carsArr.map(obj => obj.COLOR);
}

function maxColor(carsArr) {
    const arrOfColors = countColor(carsArr);
    const uniqueKey = new Date();
    const colorCountObj = {
        [uniqueKey]: 0,
    };

    arrOfColors.forEach(color => {
        if (!colorCountObj.hasOwnProperty(color)) colorCountObj[color] = 0;
    });
    
    arrOfColors.forEach(color => colorCountObj[color] += 1);
    let maxNumber = colorCountObj[uniqueKey];
    let maxKey;

    for (let key in colorCountObj) {
        if (maxNumber < colorCountObj[key]) {
            maxNumber = colorCountObj[key];
            maxKey = key;
        }
    }

    return maxKey;
}

function countCars(carsArr) {
    const unicueOvdObj = {};
    const answer = [];

    carsArr.forEach(obj => {
        if(!unicueOvdObj.hasOwnProperty(obj.OVD)) {
            unicueOvdObj[obj.OVD] = null;
        }
    });

    for (let key in unicueOvdObj) {
        const filteredArr =  carsArr.filter(obj => obj.OVD === key);
        const counter = filteredArr.length;
        const obj = {
            OVD: key,
            count: counter,
        };
        answer.push(obj);
    }

    return answer;
}

function oldAndNew(carsArr) {
    const carsArrCoppy = [];

    carsArr.forEach( obj => {
        carsArrCoppy.push(Object.assign({}, obj));
        const date = new Date(obj.THEFT_DATA);
        obj.THEFT_DATA = +date;
    });

    let newDate = carsArr[0].THEFT_DATA;
    let oldDate = carsArr[0].THEFT_DATA;
    let newIndex;
    let oldIndex;

    carsArr.forEach( (obj, index) => {
        if (newDate < obj.THEFT_DATA) {
            newIndex = index;
            newDate = obj.THEFT_DATA;
        }

        if (oldDate > obj.THEFT_DATA) {
            oldIndex = index;
            oldDate = obj.THEFT_DATA;
        }
    });
    
    const answer = [{
        name: carsArrCoppy[oldIndex].BRAND,
        date: carsArrCoppy[oldIndex].THEFT_DATA,
    },
    {
        name: carsArrCoppy[newIndex].BRAND,
        date: carsArrCoppy[newIndex].THEFT_DATA,
    },
    ];

    return answer;
}


console.log(countColor(cars));
console.log(maxColor(cars));
console.log(countCars(cars));
console.log(oldAndNew(cars));