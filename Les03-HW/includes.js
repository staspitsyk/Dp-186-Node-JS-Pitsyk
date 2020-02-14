function myIncludes(str, sbStr) {
    const strLen = str.length;
    const sbStrLen = sbStr.length;
    let checkWord = '';

    for (let i = 0; i < strLen; i++) {
        let counter = 0
        for (let j = 0; j < sbStrLen; j++) {
            checkWord += str[i + counter];
            counter++;
        }
        if (checkWord === sbStr) {
            break;
        } else {
            checkWord = ''
        }
    }
    return checkWord === sbStr;
}


let str = 'For norland produce age wishing. To figure on it spring season up.';


console.log(str.includes('age'));
console.log(myIncludes(str, 'age'));

console.log(str.includes('hing. To'));
console.log(myIncludes(str, 'hing. To'));

console.log(str.includes('fhf urj'));
console.log(myIncludes(str, 'fhf urj'));

console.log(str.includes('on it spri'));
console.log(myIncludes(str, 'on it spri'));


























