var express = require("express");
const connection = require("../db");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  let productDetails = req.body;
  console.log(productDetails);
  connection.query(
    "INSERT INTO SKU_db (sku_id, product_name, price) VALUES (?, ?, ?)",
    [productDetails?.id, productDetails?.productName, productDetails?.price],
    (error, results) => {
      if (error) {
        return res.send(error);
      }
      res.send({
        message: "Post created successfully",
        results: results,
        // data: postData,
      });
    }
  );
});

module.exports = router;
