const { MongoClient } = require("mongodb");
const CONNECTION = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(CONNECTION, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
	connect: (callback) => {
		client.connect((err, db) => {
			if (err || !db) {
				return callback(err);
			}

			dbConnection = db.db("to_do");
			console.log("Connected to database.");

			return callback();
		});
	},
	getDb: () => dbConnection,
};
