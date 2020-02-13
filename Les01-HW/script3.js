function FindNumberOfPlayers(arr) {

    if (arr.length === 0) return [];

    const teamA = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
    };

    const teamB = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
    };

    let answer = [];

    const changeTeams = function(str) {
        const team = str[0];
        const player = str.length === 3 ? str[1] : str.slice(1,3);
        const cardScore = str[2] === 'Y' ? 1 : 2;

        const deleteIfGreaterThenTwo = function(obj, key) {
            if (obj[key] >= 2) delete obj[key];
        };

        if (team === 'A' && teamA.hasOwnProperty(player)) {
            teamA[player] += cardScore;
            deleteIfGreaterThenTwo(teamA, player);
        } else if (team === 'B' && teamB.hasOwnProperty(player)) {
            teamB[player] += cardScore;
            deleteIfGreaterThenTwo(teamB, player);
        }
    };

    const findTeamLength = function(obj) {
        let counter = 0;
        for (key in obj) counter++;
        return counter;
    }

    for (let i = 0; i < arr.length; i++) {
        changeTeams(arr[i]);
        const teamAlength = findTeamLength(teamA);
        const teamBlength = findTeamLength(teamB);
        if (teamAlength < 7 || teamBlength < 7 ) break;
    }

    const teamAlength = findTeamLength(teamA);
    const teamBlength = findTeamLength(teamB);
    answer = [teamAlength, teamBlength];

    return answer;
}

console.log(FindNumberOfPlayers(['A4R', 'A4R', 'A4R']));
console.log(FindNumberOfPlayers(['A4R', 'A6R', 'A8R', 'A10R', 'A11R', 'A11R', 'A1R']));
console.log(FindNumberOfPlayers(['A4Y', 'A5R', 'B5R', 'A4Y', 'B6Y']));
console.log(FindNumberOfPlayers([]));