const express = require('express');
const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);
const path = require('path');
const rootDir = require('../util/path')

router.get('/', (req, res, next) => {
    res.render('index', { title: 'HomePage' });
});

router.get('/add-product', (req, res, next) => {
    const dzongkha = [
        { id: 1, name: 'Thimphu' },
        { id: 2, name: 'Paro' },
        { id: 3, name: 'Paro' },
    ];
    res.render('form', { title: 'Product Page', dzongkha: dzongkha });
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;

