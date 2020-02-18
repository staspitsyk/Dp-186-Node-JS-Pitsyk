function meeting(arr, number) {
    const coppyNumber = number;
    if (number === 0) return 'Game On';
    const arrOfChairs = [];

    len = arr.length;

    const pickChairs = function() {
        for (let i = 0; i < len; i++) {
            const occupants = arr[i][0].length;
            const chairsCount = arr[i][1];
    
            if (chairsCount > occupants) {
                let chairsPickedCount = chairsCount - occupants;

                const chairsAlreadyPicked = arrOfChairs.reduce((a, b) => a + b, 0);

                if ((chairsAlreadyPicked + chairsPickedCount) > number) {
                    chairsPickedCount = coppyNumber - chairsAlreadyPicked;
                    arrOfChairs.push(chairsPickedCount);
                    number -= chairsPickedCount;
                } else {
                    arrOfChairs.push(chairsPickedCount);
                    number -= chairsPickedCount;
                }
                if (number <= 0) break;
            } else {
                arrOfChairs.push(0);
            }
        }
    };
    pickChairs();

    const answer = number <= 0 ? arrOfChairs : 'Not enough!';

    return answer;
}

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));

console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5));

console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));

console.log(meeting([['XX', 5], ['XXXX', 10], ['XXXXX', 4]], 7));