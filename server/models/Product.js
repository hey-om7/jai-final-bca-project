const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: false }, // Optional, derived from categoryId
    categoryId: { type: Number, required: true },
    image: { type: String, required: true },
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
