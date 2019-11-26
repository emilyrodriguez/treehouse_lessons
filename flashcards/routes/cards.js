const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;


router.get('/', (req,res) => {
	const numOfCards = cards.length;
	const randomCardId = Math.floor(Math.random() * numOfCards);
	res.redirect(`/cards/${randomCardId}?side=question`);
});

router.get('/:id', (req, res) => {
	const { side } = req.query;
	const { id } = req.params;

	if (!side) {
		res.redirect(`/cards/${randomCardId}?side=question`);
	}

	const name = req.cookies.username;
	const text = cards[id][side];
	const { hint } = cards[id];


	const templateData = { id, text, name };

	if (side === 'question') {
		templateData.hint = hint;
		templateData.sideToShow = 'answer';
		templateData.sideToShowDisplay = 'Answer';
	} else if (side === 'answer') {
		templateData.sideToShow = 'question';
		templateData.sideToShowDisplay = 'Question';
	}

    res.render('card', templateData);
});


module.exports = router;