//1. Dependencies npm install express
//2. Instiatitions 
const express = require('express');
const app = express();
const productRoute = require('./routes/product');
const path = require('path');

//3. Configuration
app.set('port', process.env.PORT || 3005)
const port = app.get('port');
app.listen(port, () => {
    console.log("Server running on 3005")
});

app.set('view engine','ejs');
app.set(path.join(__dirname, 'views'));
//app.set('views', path.join(__dirname, 'templates'));

app.set('appName', 'My page');
app.set('env', 'development');

//4. Middleware: order of middleware matters
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/style', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));

app.use('/product', productRoute);
