const arr = ['Апельсин', 'Арбуз', 'Яблоко', 'Банан', 'Ананас', 'Груша'];

console.log(arr.filter(el => el[0].toLowerCase() === 'а'));

let a = arr.reduce((prev, next, index) => {
    if (index === 1 && prev[0].toLowerCase() === 'а' && next[0].toLowerCase() === 'а') {
        return [prev, next];
    } else if (index === 1 && prev[0].toLowerCase() === 'а') {
        return [prev];
    } else if (index === 1 && next[0].toLowerCase() === 'а') {
        return [next];
    } else if (next[0].toLowerCase() === 'а') {
        return prev.concat(next);
    } else if (index === 1 && prev[0].toLowerCase() !== 'а' && next[0].toLowerCase() !== 'а') {
        return [];
    } else if (index > 1 && next[0].toLowerCase() !== 'а') {
        return prev;
    }
});

console.log(a);