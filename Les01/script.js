function nextVersion(str) {
    arr = str.split('.');
    // console.log(arr);
    arr = arr.map(n => +n);
    // console.log(arr);
    arr[arr.length - 1] = arr[arr.length - 1] + 1;
    // console.log(arr);

    for (let i = 1; i < arr.length; i++) {
        if (arr[arr.length - i] === 10) {
            arr[arr.length - i] = 0;
            arr[arr.length - i -1] = arr[arr.length - i -1] + 1
        }
    }

    arr = arr.join('.');
    console.log(arr);


}



nextVersion("1.2.3.4.5.6.7.8");
nextVersion("0.9.9");
nextVersion("9.9");
nextVersion("1.2.3");
nextVersion("1");