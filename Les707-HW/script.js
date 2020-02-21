const arr = ['-','/','\\'];

function spinner(arr, obj) {
    console.clear()
    console.log(arr[obj.counter]);
    // setTimeout(() => console.clear(), 490)
    obj.counter++;
    if(obj.counter === arr.length) obj.counter = 0;

}

setInterval(spinner, 500, arr, {counter: 0});

// const arr = []

// function newSpinner() {

// }

// setInterval(newSpinner, 500,)
