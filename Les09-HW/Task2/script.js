function damagedOrSunk(board, attacks) {
    const boardLen = board.length;
    const correctArr = [];
    const shipsLen = {};
    const result = {
        sunk: 0,
        damaged: 0,
        notTouched: 0,
        points: 0,
    };

    attacks.forEach(arr => {
        const emptArr = [];
        arr.forEach((n, index) => {
            if (index === 0) emptArr.unshift(n - 1);
            if (index === 1) emptArr.unshift(boardLen - n);
        });
        correctArr.push(emptArr);
    });

    board.forEach(arr => {
        arr.forEach(n => {
            if(n !== 0 && !shipsLen.hasOwnProperty(n)) shipsLen[n] = 0;
            if(n !== 0 && shipsLen.hasOwnProperty(n)) shipsLen[n]++;
        });
    });

    const shipsLenCoppy = Object.assign({}, shipsLen);

    correctArr.forEach(attack => {
        const row = attack[0];
        const column = attack[1];
        if (board[row][column]) {
            const key = board[row][column];
            shipsLen[key] -= 1;
            if (shipsLen[key] === 0) {
                result.sunk++;
                if (shipsLenCoppy[key] !== 1) result.points -= 0.5;
            } else if (shipsLen[key] === shipsLenCoppy[key] - 1) {
                result.points += 0.5;
            }
        }
    });

    for (let key in shipsLen) {
        if (shipsLen[key] === shipsLenCoppy[key]) {
            result.notTouched++;
            result.points--;
        }

        if (shipsLen[key] !== shipsLenCoppy[key] && shipsLen[key] !== 0) result.damaged++;
    }

    return result;
}

const board1 = [
    [0, 0, 0, 2, 2, 0],
    [0, 3, 0, 0, 0, 0],
    [0, 3, 0, 1, 0, 0],
    [0, 3, 0, 1, 0, 0]
];

const attacks1 = [
    [2, 1],
    [1, 3],
    [4, 2]
];

console.log(damagedOrSunk(board1, attacks1));

const board2 = [
    [3, 0, 0, 0, 0, 2],
    [0, 3, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0],
    [0, 0, 0, 3, 0, 0],
    [0, 1, 1, 0, 0, 0]
];

const attacks2 = [
    [6, 5],
    [1, 1],
    [2, 2]
];

console.log(damagedOrSunk(board2, attacks2));
