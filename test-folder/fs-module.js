const fs = require('fs');

const fileName = '../txt/test.txt';

const data = fs.readFileSync(fileName);
console.log(data.toString());

console.log('middle line app.js');

const errorHandler = (err) => console.log(err);
const dataHandler = (data) => console.log(data.toString());

fs.readFile(fileName, (err, data) => {
    if (err) errorHandler(err);
    dataHandler(data);
});

console.log('last line app.js');
