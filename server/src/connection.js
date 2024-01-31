const mysql = require("mysql");

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "",
	database: "rest_user",
});

module.exports = db;
