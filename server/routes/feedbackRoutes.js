const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const { protect, admin } = require('../middleware/authMiddleware');

// @desc    Create a new feedback
// @route   POST /api/feedbacks
// @access  Private
router.post('/', protect, async (req, res) => {
    const { review } = req.body;

    if (!review || review.trim() === '') {
        return res.status(400).json({ message: 'Review text is required' });
    }

    const feedback = await Feedback.create({
        user: req.user._id,
        review
    });

    if (feedback) {
        res.status(201).json(feedback);
    } else {
        res.status(400).json({ message: 'Invalid feedback data' });
    }
});

// @desc    Get all feedbacks
// @route   GET /api/feedbacks
// @access  Private/Admin
router.get('/', protect, admin, async (req, res) => {
    const feedbacks = await Feedback.find({}).populate('user', 'id name email');
    res.json(feedbacks);
});

module.exports = router;
