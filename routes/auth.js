const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const TOKEN = 'accessToken';

router.get('/', (req, res) => {
	res.send('hello');
});

module.exports = router;
