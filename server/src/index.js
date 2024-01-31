const express = require("express");
const cors = require("cors");
const db = require("./connection");
const dotenv = require("dotenv").config();

const app = express();

const corsOptions = {
	origin: "http://localhost:5173",
	credentials: true,
	methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
	db.query("SELECT * FROM users", (err, result) => {
		if (err) {
			res.status(400).json({err: err});
		} else {
			res.status(200).send(result);
		}
	});
});

app.post("/user/new-user", (req, res) => {
	const {name, email, age} = req.body;
	if (!name || !email || !age)
		return res.status(400).json({error: "All field are required"});
	if (email) {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
		const isValidEmail = emailRegex.test(email);
		if (!isValidEmail)
			return res.status(400).json({error: "Invalid email format"});
	}
	db.query(
		"INSERT INTO users (name,email,age) VALUES (?,?,?)",
		[name, email, parseInt(age)],
		(err, result) => {
			if (err) {
				res.status(400).json({error: err});
			} else {
				res.status(201).json({result});
			}
		}
	);
});

app.put("/user/edit-user", (req, res) => {
	const {_id, name, email, age} = req.body;
	db.query(
		"UPDATE users SET name=(?),email=(?),age=(?) WHERE users._id = (?)",
		[name, email, age, _id],
		(err, result) => {
			if (err) {
				res.status(400).json({error: err, message: "Failed to udpate user"});
			} else {
				res.status(200).json("Updated user");
			}
		}
	);
});

app.delete("/user/delete-user/:id", (req, res) => {
	const userId = req.params.id;
	db.query(
		"DELETE FROM users WHERE users._id = (?)",
		[userId],
		(err, result) => {
			if (err) {
				res.status(400).json({error: err, message: "Failed to remove user"});
			} else {
				res.status(204).json("User removed");
			}
		}
	);
});

app.listen("3001" || process.env.PORT, () => {
	console.log("Server started !!");
});
