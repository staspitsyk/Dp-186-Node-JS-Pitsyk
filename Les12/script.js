// document.getElementById('root'); // 1 html element 
// document.getElementsByClassName('className') // html collection
// document.getElementsByTagName('div') // html collection
// document.getElementsByName('info') //html collection

// document.querySelector('#root');
// document.querySelectorAll('div');

// function showModal(isShow = true) {
//     document.querySelector('#modal').style.display = isShow ? 'block':'none';
// }

function lighter() {
    let lighter = document.getElementsByClassName('lighter');
    const btn = document.getElementById('btn');
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');
    const btnTop = document.getElementById('btn-top');
    const btnDown = document.getElementById('btn-down');
    let myLighter = document.getElementById('myId');
    lighter = lighter[0].children;
    console.log(lighter);
    console.log(lighter[0].children);
    let counter = 1;

    const changeLight = function() {

        if(counter === 1) {
            lighter[0].style.backgroundColor = 'red';
        } else if (counter === 2) {
            lighter[0].style.backgroundColor = '';
            lighter[1].style.backgroundColor = 'yellow';
        } else if (counter === 3) {
            lighter[1].style.backgroundColor = '';
            lighter[2].style.backgroundColor = 'green';
        } else {
            lighter[0].style.backgroundColor = 'red';
            lighter[1].style.backgroundColor = '';
            lighter[2].style.backgroundColor = '';
            counter = 1;
        }

        counter++;
    }

    const left = function() {
        myLighter.style.transform = 'translate(-100px)'
    }

    const right = function() {
        myLighter.style.transform = 'translate(100px)'
    }

    const top = function() {
        myLighter.style.transform = 'translate(0, 100px)'
    }

    const down = function() {
        myLighter.style.transform = 'translate(0, -100px)'
    }

    btn.addEventListener('click', changeLight);

    btnLeft.addEventListener('click', left);
    btnRight.addEventListener('click', right);
    btnTop.addEventListener('click', top);
    btnLeft.addEventListener('click', left);

}

lighter();