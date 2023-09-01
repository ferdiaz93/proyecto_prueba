const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({
    modelo: String,
    anio: Number,
    stock: Number,
    talle: String,
    cantidad: Number,
    precio: Number,
    equipo: String,
    img_url: String
});

const Product = model('Product', productSchema);

module.exports = Product;