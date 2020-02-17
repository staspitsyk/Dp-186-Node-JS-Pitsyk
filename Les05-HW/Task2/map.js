 const arr = ['Яблоко', 'Банан', 'Ананас'];

 console.log(arr.map(el => el[0]));

 let a = arr.reduce((prev, next, index) =>  {
    if (index === 1) {
        return [prev[0], next[0]];
    } else {
        return prev.concat(next[0]);
    }
 });

 console.log(a);