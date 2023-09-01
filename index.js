const express = require('express');
const app = express();
const productController = require('./server/controllers/productController');

app.get('/api/products', productController.getAll);
app.post('/api/product', productController.create);

app.listen(8000, () => {
    console.log('Servidor corriendo en puerto 8000');
});