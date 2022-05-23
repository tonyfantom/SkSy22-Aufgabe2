const express = require("express");
const db = require("./connect");

const app = express();

app.use(express.json());
app.use(require("./routes"));

const PORT = 1234;

db.connect((err) => {
	if (err) {
		console.error(err);
		process.exit();
	}

	app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
});
