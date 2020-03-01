function reload() {
    const ul = document.getElementsByTagName('ul')[0];
    let arrOfTodo = localStorage.getItem('arrOfTodo');

    if (arrOfTodo) {
        arrOfTodo = JSON.parse(arrOfTodo);
        let checkedObj = localStorage.getItem('checkedObj') || {};
        checkedObj = JSON.parse(checkedObj);
        arrOfTodo.forEach(todo => {
            const li = document.createElement('li');
            li.addEventListener('click', (event) => {
                addObjToStorage(event);
            });
            const liClass = checkedObj[todo] ? 'checked' : '';
            li.setAttribute('class', liClass);
            li.innerHTML = todo;
            ul.append(li);
        });
    }
}

function render() {
    const btn = document.getElementById('btn');

    const addTodo = function() {
        const input = document.getElementById('inp');
        const ul = document.getElementsByTagName('ul')[0];
        const value = input.value;

        let arrOfTodo = localStorage.getItem('arrOfTodo');

        if (arrOfTodo) {
            arrOfTodo = JSON.parse(arrOfTodo);
            arrOfTodo.unshift(value);
            localStorage.setItem('arrOfTodo', JSON.stringify(arrOfTodo));
        } else {
            localStorage.setItem('arrOfTodo', JSON.stringify([value]));
        }

        const li = document.createElement('li');
        li.innerHTML = value;
        li.addEventListener('click', (event) => {
            addObjToStorage(event);
        });
        ul.prepend(li);
        input.value = '';
    };

    btn.addEventListener('click', addTodo);
}

function addObjToStorage(event) {
    const li = event.target;
    const value = li.innerHTML;

    let checkedObj = localStorage.getItem('checkedObj');

    if (checkedObj) {
        checkedObj = JSON.parse(checkedObj);
        checkedObj[value] = 'checked';
        checkedObj = localStorage.setItem('checkedObj', JSON.stringify(checkedObj));
    } else {
        localStorage.setItem('checkedObj', JSON.stringify({[value]: 'checked'}));
    }

    localStorage.setItem
    li.setAttribute('class', 'checked');
}

reload();
render();
