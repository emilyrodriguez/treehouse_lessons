const express = require('express');

function asyncHandler(cb){
  return async (req, res, next)=>{
	try {
	  await cb(req,res, next);
	} catch(err){
	  next(err);
	}
  };
}

// Send a GET request to /quotes to READ a list of quotes
app.get('/quotes', asyncHandler(async(req, res) => {
	const quotes = await records.getQuotes();
	if(quote) {
		res.json(quotes);
	} else {
		res.status(404).json({ message: "Quote not found."});
	}

}));

// Send a GET request to /quotes/:id to READ(view) a quote
app.get('/quotes/:id', async (req, res) => {
	try {
		const quote = await records.getQuote(req.params.id);
		res.json(quote);
	} catch(err) {
		res.json({ message: err.message });
	}
});

//Send a POST request to /quotes to  CREATE a new quote 
app.post("/quotes", asyncHandler( async (req,res) => {
	if(req.body.author && req.body.quote){
		const quote = await records.createQuote({
			quote: req.body.quote,
			author: req.body.author
		});
		res.status(201).json(quote);
	} else {
		res.status(400).json({message: "Quote and author required."});
	}
}));

// Send a PUT request to /quotes/:id to UPDATE (edit) a quote
app.put('/quotes/:id', asyncHandler(async(req,res) => {
	const quote = await records.getQuote(req.params.id);
	if(quote) {
		quote.quote = req.body.quote;
		quote.author = req.body.author;
		await records.updateQuote(quote);
		res.status(204).end();
	} else {
		res.status(404).json({message: "Quote not found."});
	}

}));

// Send a DELETE request to /quotes/:id DELETE a quote
app.delete("/quotes/:id", asyncHandler(async(req,res,next) => {
	const quote = await records.getQuote(req.params.id);
	if(quote) {
		await records.deleteQuote(quote);
		res.status(204).end();		
	} else {
		res.status(404).json({message: "Quote not found."});
	}

}));
// Send a GET request to /quotes/quote/random to READ (view) a random quote