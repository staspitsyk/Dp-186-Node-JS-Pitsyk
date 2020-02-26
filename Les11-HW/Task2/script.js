document.addEventListener("DOMContentLoaded", reload);

function reload() {
    const ul = document.getElementsByTagName('ul')[0];
    const storage = localStorage;

    for (let key in storage) {
        if (key.slice(0, 4) === 'toDo') {
            const li = document.createElement('li');
            li.innerHTML = storage[key];
            ul.append(li);
        }
    }
}

function render() {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', addTodo);
}

function addTodo() {
    const input = document.getElementById('inp');
    const ul = document.getElementsByTagName('ul')[0];
    const value = input.value;
    localStorage.setItem(`toDo${new Date()}`, value);
    const li = document.createElement('li');
    li.innerHTML = value;
    ul.append(li);
    input.value = '';
}

render();
