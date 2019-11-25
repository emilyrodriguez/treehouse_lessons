const express = require("express");

const app = express();
const port = 3000;

app.get('/', (request, response) => {
	response.send('It works');
});

app.listen(port);