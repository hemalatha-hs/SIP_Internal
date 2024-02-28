const express = require('express');
const router = express.Router();
const Food = require('../models/food');

// Fetch All Foods
router.get('/', async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// Implement Filters and Search (Query parameters)

module.exports = router;
