const Promise = require('promise');
const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, '../txt/' + 'test.txt');

var readFile = Promise.denodeify(fs.readFile);
readFile(fileName, 'utf8')
    .then(
        function (content) {
            console.log('The file contained: ' + content);
        },
        function (error) {
            console.log('Failed to read file: ' + error);
        }
    )
    .catch((err = () => console.log(err)));
