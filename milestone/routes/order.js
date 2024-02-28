const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// Place Order
router.post('/', async (req, res) => {
    try {
        const { foodId, userId, orderId, paymentMode } = req.body;
        const order = new Order({
            foodId,
            userId,
            orderId,
            paymentMode
        });
        await order.save();
        res.json(order);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
