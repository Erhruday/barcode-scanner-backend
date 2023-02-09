var express = require("express");
const connection = require("../db");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  connection.query("SELECT * FROM SKU_db", (error, results) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.send(results);
  });
});

module.exports = router;
