const axios = require('axios');

task1 = {
    title: 'Some text',
    duration: 45,
}

task2 = {
    title: 'More text',
    duration: 20,
}

task3 = {
    title: 'Random text',
    duration: 30,
}

axios.post('http://localhost:3000', task1);
axios.post('http://localhost:3000', task2);
axios.post('http://localhost:3000', task3);