// env
require('dotenv').config();

// dependencies
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

const auth = require('./routes/auth');
const travel = require('./routes/travel');

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', auth);
app.use('/api/travel', travel);

app.listen(port, () => {
	console.log(`app listening on http://localhost:${port}`);
});
