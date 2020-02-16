function meeting(s) {
    const arrOfArrs = [];
    const objOfLastNames = {};
    const arrOfPerson = s.split(';');
    arrOfPerson.forEach(person => arrOfArrs.push(person.split(':')));
    arrOfArrs.forEach(arr => {
        if (!objOfLastNames.hasOwnProperty(arr[1])) {
            objOfLastNames[arr[1]] = [];
        }
    })
    arrOfArrs.forEach(arr => { objOfLastNames[arr[1]].push(arr[0]) });

    for (let key in objOfLastNames) {
        objOfLastNames[key].sort();
    }
    const arrOfLastNames = Object.keys(objOfLastNames).sort();

    const sortPersons = function(arr, obj) {
        let answer = ``;
        arr.forEach( lastName => {
            obj[lastName].forEach( firstName => {
                answer += `(${lastName.toUpperCase()}, ${firstName.toUpperCase()}) `;
            });
        });
        return answer;
    };

    const answer = sortPersons(arrOfLastNames, objOfLastNames)

    return answer;
}

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

console.log(meeting(s));