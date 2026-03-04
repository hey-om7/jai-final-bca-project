const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { protect, admin } = require('../middleware/authMiddleware');

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
router.post('/', protect, async (req, res) => {
    const { productId, quantity, totalPrice } = req.body;

    if (!productId || !quantity || !totalPrice) {
        res.status(400);
        throw new Error('Please provide all required fields');
        return;
    } else {
        const order = new Order({
            userId: req.user._id,
            productId,
            quantity,
            totalPrice
        });

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
router.get(
    '/',
    protect,
    admin,
    async (req, res) => {
        try {
            const Address = require('../models/Address');
            const orders = await Order.find({})
                .populate('userId', 'id name email')
                .populate('productId', 'id title price');

            // Attach address info for each order's user
            const ordersWithAddress = await Promise.all(
                orders.map(async (order) => {
                    const address = order.userId
                        ? await Address.findOne({ user: order.userId._id })
                        : null;
                    return { ...order.toObject(), address };
                })
            );

            res.json(ordersWithAddress);
        } catch (error) {
            console.error("Error fetching orders:", error);
            res.status(500).json({ message: "Server Error" });
        }
    }
);

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private/Admin
router.get(
    '/:id',
    protect,
    admin,
    async (req, res) => {
        try {
            const order = await Order.findById(req.params.id)
                .populate('userId', 'name email')
                .populate('productId', 'title price image category');

            if (order) {
                res.json(order);
            } else {
                res.status(404);
                throw new Error('Order not found');
            }
        } catch (error) {
            console.error("Error fetching order by ID:", error);
            res.status(500).json({ message: "Server Error" });
        }
    }
);

module.exports = router;
