const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    category: {
        type: String,
        enum: ['veg', 'non-veg', 'dessert'],
        required: true
    }
});

module.exports = mongoose.model('Food', FoodSchema);
