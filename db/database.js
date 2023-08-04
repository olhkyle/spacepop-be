const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGODB_URI;

let connectDB;

if (process.env.NODE_ENV === 'development') {
	if (!global._mongo) {
		global._mongo = new MongoClient(url).connect();
	}
	connectDB = global._mongo;
} else {
	connectDB = new MongoClient(url).connect();
}

module.exports = connectDB;
