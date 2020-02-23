const url = 'https://randomuser.me/api/?results=1000';

function getUsers(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            addDataToDom(data);
        }
    };
}

function addDataToDom(data) {
    const arr = data.results;
    const root = document.getElementById('root');
    const fragment = document.createDocumentFragment();
    const theYoungest =document.createElement('h3');
    theYoungest.innerHTML = findYangestUser(arr);
    fragment.append(theYoungest);

    const theOldest = document.createElement('h3');
    theOldest.innerHTML = findOldestUser(arr);
    fragment.append(theOldest);

    const menWomenCount = howManyMenAndWomen(arr);

    const menCount = document.createElement('h3');
    menCount.innerHTML = `Количество мужчин в выборке - (${menWomenCount[0]})`;
    fragment.append(menCount);

    const womenCount = document.createElement('h3');
    womenCount.innerHTML = `Количество женщин в выборке - (${menWomenCount[1]})`;
    fragment.append(womenCount);

    const averageAge = averageAgeMenAndWomen(arr);

    const averageAgeMen = document.createElement('h3');
    averageAgeMen.innerHTML = `Средний возраст мужчин в выборке - (${averageAge[0]})`;
    fragment.append(averageAgeMen);

    const averageAgeWomen = document.createElement('h3');
    averageAgeWomen.innerHTML = `Средний возраст женщин в выборке - (${averageAge[1]})`;
    fragment.append(averageAgeWomen);

    const friquentCity = document.createElement('h3');
    friquentCity.innerHTML = mostFrequentlyCity(arr);
    fragment.append(friquentCity);

    root.append(fragment);
}

function findYangestUser(arr) {
    let theYoungest = arr[0].dob.date;
    let name, surname, age;


    arr.forEach(obj => {
        if (obj.dob.date > theYoungest) {
            theYoungest = obj.dob.date;
            name = obj.name.first;
            surname = obj.name.last;
            age = obj.dob.age;
        }  
    });

    return `Самый молодой юзер - (${age}, ${name}, ${surname})`;
}

function findOldestUser(arr) {
    let theOldest = arr[0].dob.date;
    let name, surname, age;


    arr.forEach(obj => {
        if (obj.dob.date < theOldest) {
            theYoungest = obj.dob.date;
            name = obj.name.first;
            surname = obj.name.last;
            age = obj.dob.age;
        }  
    });

    return `Самый старый юзер - (${age}, ${name}, ${surname})`;
}

function howManyMenAndWomen(arr) {
    let man = 0;
    let woman = 0;
    arr.forEach(obj => {
        if (obj.gender === 'female') woman++;
        if (obj.gender === 'male') man++;
    });

    return [man, woman];
}

function averageAgeMenAndWomen(arr) {
    let manCounter = 0;
    let manAgeSum = 0;
    let womanCounter = 0;
    let womanAgeSum = 0;

    arr.forEach(obj => {
        if (obj.gender === 'female') {
            womanAgeSum += obj.dob.age;
            womanCounter++;
        } else if (obj.gender === 'male') {
            manAgeSum += obj.dob.age;
            manCounter++;
        }
    });

    return [manAgeSum/manCounter, womanAgeSum/womanCounter];
}

function mostFrequentlyCity(arr) {
    const uniqueKey = new Date();
    const uniqueCity = {
        [uniqueKey]: 0,
    };
    let count = uniqueCity[uniqueKey];
    let sityName;

    arr.forEach(obj => {
        if (!uniqueCity.hasOwnProperty(obj.location.city)) {
            uniqueCity[obj.location.city] = 1;
        } else {
            uniqueCity[obj.location.city]++;
        }
    });
    for (let key in uniqueCity) {
        if (count < uniqueCity[key]) {
            count = uniqueCity[key];
            sityName = key;
        }
    }

    return `Город с наибольшим количеством юзеров в выборке - (${sityName}, ${count})`;
}

function addToDom() {
    const root = document.getElementById('root');
    const button = document.createElement('button');
    button.innerHTML = 'Show users statistics';
    button.addEventListener('click', () => getUsers(url));
    root.append(button);
}

addToDom();
