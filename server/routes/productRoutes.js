const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.id });
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

const { protect, admin } = require('../middleware/authMiddleware');

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
    try {
        // Find by custom 'id' field, OR '_id' if you prefer. 
        // The frontend currently uses 'id' (number) for routing but mongo uses _id.
        // Let's support deletion by MongoDB _id for admin panel consistency.
        const product = await Product.findById(req.params.id);

        if (product) {
            await product.deleteOne();
            res.json({ message: 'Product removed' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
    const { id, title, price, image, category, description, categoryId } = req.body;

    const productExists = await Product.findOne({ id });

    if (productExists) {
        res.status(400).json({ message: 'Product ID already exists' });
        return;
    }

    const product = new Product({
        id,
        title,
        price,
        image,
        category,
        description,
        categoryId
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

module.exports = router;
