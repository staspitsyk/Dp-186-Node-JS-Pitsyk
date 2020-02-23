function whoIsTheWinner(board) {
    if (board[0].includes(0) || board[1].includes(0) || board[2].includes(0)) return -1;

    const boardScore = {
        topRow : board[0].reduce((a,b) => a + b, 0),
        middleRow : board[1].reduce((a,b) => a + b, 0),
        bottomRow : board[2].reduce((a,b) => a + b, 0),
        firstColumn : board[0][0] + board[1][0] + board[2][0],
        secondColumn : board[0][1] + board[1][1] + board[2][1],
        thirdColumn : board[0][2] + board[1][2] + board[2][2],
        leftDiagonal : board[0][0] + board[1][1] + board[2][2],
        rightDiagonal : board[2][0] + board[1][1] + board[0][2],
    };

    let answer = 0;

    for (let key in boardScore) {
        if (boardScore[key] === 3) {
            answer = 1;
            break;
        } else if (boardScore[key] === 6) {
            answer = 2;
            break;
        }
    }

    return answer;
}


const board1 = [[0, 0, 1],
                [0, 1, 2],
                [2, 1, 0]];

const board2 = [[1, 2, 1],
                [1, 2, 2],
                [2, 2, 1]];
                
const board3 = [[1, 1, 2],
                [2, 1, 2],
                [2, 2, 1]];

const board4 = [[1, 1, 2],
                [2, 2, 1],
                [1, 2, 1]];


console.log(whoIsTheWinner(board1));
console.log(whoIsTheWinner(board2));
console.log(whoIsTheWinner(board3));
console.log(whoIsTheWinner(board4));
