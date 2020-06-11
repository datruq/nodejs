const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, '../txt/' + 'test.txt');

const data = fs.readFileSync(fileName);
console.log(data.toString());

console.log('middle line app.js');

const errorHandler = (err) => console.log(err);
const dataHandler = (data) => console.log(data);

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) errorHandler(err);
    dataHandler(data);
});

console.log('last line fs-module.js');
