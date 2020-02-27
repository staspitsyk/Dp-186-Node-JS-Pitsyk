const http = require('http');
const fs = require('fs');

function readFile(str) {
    const myPromise = new Promise((resolve, reject) => {
    fs.readFile(str, (err, data) => {
        if (err) reject(err);
        console.log(data.toString('utf8'));
        resolve(data);
    });
});
    return myPromise;
}


readFile('./index.txt').then(data => {
    console.log(data.toString('utf8'));
}).catch(err => console.log(err));

const server = http.createServer((req, res) => {
    
});

server.listen(3000, () => console.log('Server has started'));