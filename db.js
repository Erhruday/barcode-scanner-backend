const mysql = require("mysql2");

// console.log(process.env.DB_USER, "USER");

const connection = mysql.createConnection({
  host: "aws.connect.psdb.cloud",
  user: "93lztfp46u8mafn9aa04",
  password: "pscale_pw_jpB3WIoDoOMSPLekZKRqyOhp5i9RLgtuK2yUg6QC7oL",
  database: "news_api",
  ssl: {},
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database: " + err.message);
    return;
  }
  console.log("Connected to database as ID " + connection.threadId);
});

module.exports = connection;
