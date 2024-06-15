const express = require('express');
const path = require('path');
const app = express();
const productRoute = require('./routes/products');

app.use(express.urlencoded({extended: false}));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use('/product', productRoute);

app.listen(3000, () => {
    console.log("Server running on 3000")
});