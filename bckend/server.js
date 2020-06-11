const express = require('express');


const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 8000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

var route = require('./routes/routes');
app.use('/', route);
app.listen(PORT, function() {
    console.log("server running on localhost:" + PORT);
});