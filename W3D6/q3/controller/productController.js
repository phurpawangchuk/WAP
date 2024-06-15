products = [
    { id: 1, name: 'Product 1', description: 'Description for product 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description for product 2', price: 20 },
    { id: 3, name: 'Product 3', description: 'Description for product 3', price: 30 },
];

exports.getAllProduct = (req, res, next) => {
    console.log("ssss==",products);
    res.render('index', { products: products });
};

getProduct = (req, res, next) => {
    const product = products.find(p => p.id == req.params.id);
    if (product) {
        res.render('product', { product: product });
    } else {
        res.status(404).send('Product not found');
    }
};

addToCart = (req, res, next) => {
    const { name, price } = req.body;
    console.log(`Product added to cart: ${name}, ${price}`);
    res.redirect('/shop');
};
