const express = require("express");
const mongodb = require("mongodb");
const routes = express.Router();
const db = require("./connect");
const cors = require('cors');

routes.use(cors());

routes.route("/todos").get((_req, res) => {
	const connection = db.getDb();

	connection
		.collection("todos")
		.find({})
		.limit(50)
		.toArray((err, result) => {
			if (err) {
				res.status(400).send();
			}
			res.json(result);
		});
});

routes.route("/todos").post(async (req, res) => {
	const connection = db.getDb();
	const todo = {
		title: req.body.title,
		date: new Date(req.body.date),
		percentage: req.body.percentage,
	};

	try {
		await connection.collection("todos").insertOne(todo);
	} catch (err) {
		res.status(400).send();
	}

	res.status(204).send();
});

routes.route("/todos").put(async (req, res) => {
	const connection = db.getDb();
	const filter = { _id: new mongodb.ObjectId(req.body.id) };
	const update = {
		$set: {
			title: req.body.title,
			date: new Date(req.body.date),
			percentage: req.body.percentage,
		},
	};

	try {
		await connection.collection("todos").updateOne(filter, update);
	} catch (err) {
		res.status(400).send();
	}

	res.status(204).send();
});

routes.route("/todos").delete(async (req, res) => {
	const connection = db.getDb();
	const filter = { _id: new mongodb.ObjectId(req.body.id) };

	try {
		await connection.collection("todos").deleteOne(filter);
	} catch (err) {
		res.status(400).send();
	}

	res.status(204).send();
});

module.exports = routes;
