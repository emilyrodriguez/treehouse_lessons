const express = require('express');
const app = express();
const records = require('./records');

//Send a GET request to /quotes to READ a list of quotes
app.get('/quotes', async (req, res) => {
	const quotes = await records.getQuotes();
	res.json(quotes);
});
//Send a GET request to /quotes/:id to READ a specific quote
app.get('/quotes/:id', async (req, res) => {
	const quote = await records.getQuote(req.params.id);
	res.json(quote);
});

app.listen(3000, () => console.log('Quote API listening on port 3000!'));


