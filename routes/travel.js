const express = require('express');
const router = express.Router();

const connectDB = require('../db/database');
const DB = 'spacepop';

router.get('/', async (req, res) => {
	try {
		const client = await connectDB;
		const response = await client.db(DB).collection('travel').find().toArray();
		res.status(200).send({ data: response });
	} catch (e) {
		console.error(e);
	}
});

module.exports = router;
