const express = require('express');
const productController = require('../controller/productController');

const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);

router.get('/', productController.getAllProduct);

router.post('/', (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  res.render('index', {name: name, age: age});
});

module.exports = router;