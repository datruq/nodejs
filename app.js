const express = require('express');
const postRoute = require('./routes/post');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3030;

app.use('/', postRoute);

app.listen(port, () => {
    console.log(`listening to http://localhost:${port}`);
});
