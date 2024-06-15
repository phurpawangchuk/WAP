const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    let css = hour >= 6 && hour < 18 ? 'night.css' : 'night.css';

    res.render("index", {
        time: date.toTimeString(),
        cssFile: css,
    });
});

app.listen(3000, () => {
    console.log("Server running on 3000")
});