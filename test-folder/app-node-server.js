// console.log(("process: ", process));

const { sum, rest } = require('./helpers');
const { mult } = require('./helpers2');
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('hellow calculator');
});

server.listen('4000');

const suma = sum(2, 4);

const multi = mult(2, 4);

console.log('la suma es ', suma);
console.log('la multi es ', multi);
