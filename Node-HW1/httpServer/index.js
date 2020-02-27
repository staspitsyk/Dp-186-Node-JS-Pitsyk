const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.method);

    if (req.method === 'GET') {
        fs.readFile('./tasks/summary.json', (err, data) => {
            if (err) console.log(err);
            res.end(data.toString('utf8') + ']');
        })
    } else if (req.method === 'POST') {
        let data = '';

        req.on('data', (chunk) => {
            console.log(chunk);
            data += chunk.toString('utf8');
        });

        req.on('end', () => {
            const task = JSON.parse(data);
            console.log(data);

            fs.appendFile(`./tasks/summary.json`, `${data}, `, (err) => {
                if (err) throw err;
            })

            fs.appendFile(`./tasks/${task.title}.json`,  data, (err) => {
                if (err) throw err;
                console.log(`Create file ${task.title}.json`);
            })
            res.end(data);
        });
    }
});

server.listen(3000, () => console.log('Server has started'));