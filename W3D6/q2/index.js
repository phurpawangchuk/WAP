const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  res.render('index', {name: name, age: age});
});

app.listen(3000, () => {
    console.log("Server running on 3000")
});