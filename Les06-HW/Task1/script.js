function findTwoPoints(arr) {
    let truePoint1;
    let truePoint2;
    let smolestDist = findEuclidDist(arr[0], arr[1]);
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i === j) continue;
            const dist = findEuclidDist(arr[i], arr[j]);
            if (dist < smolestDist) {
                truePoint1 =  arr[i];
                truePoint2 = arr[j];
                smolestDist = dist;
            }

        }
    }

    return [truePoint1, truePoint2];
}

function findEuclidDist(point1, point2) {
    const side1 = point1[0] - point2[0];
    const side2 = point1[1] - point2[1];
    const distance = (side1**2 + side2**2)**(1/2);
    return distance;
}


const arr = [[2,2],[2,8],[5,5],[6,3],[6,7],[7,4],[7,8]];

console.log(findTwoPoints(arr));