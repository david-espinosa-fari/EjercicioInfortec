const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const index = require('./routes/index');

app.use(bodyParser.json());
app.use('/', index);


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



