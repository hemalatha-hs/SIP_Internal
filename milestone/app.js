
// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express application
const app = express();

// Set up middleware to parse JSON request bodies
app.use(bodyParser.json());

// Mock database for storing orders
const ordersDatabase = [];

// Route for processing payments
app.post('/api/process-payment', (req, res) => {
    // Assume req.body contains payment details (e.g., amount, user info, etc.)
    const paymentDetails = req.body;

    // Here you would integrate with a real payment gateway.
    // For simplicity, let's assume a successful payment with a mock response.
    const invoiceId = generateInvoiceId();
    const paymentResponse = {
        success: true,
        invoiceId: invoiceId,
        message: 'Payment successful',
    };

    // Store order details in the database
    const orderDetails = {
        invoiceId: invoiceId,
        userInfo: paymentDetails.user,
        paymentDetails: paymentDetails,
    };
    ordersDatabase.push(orderDetails);

    res.json(paymentResponse);
});

// Retrieve order details from the database
app.get('/api/orders', (req, res) => {
    res.json(ordersDatabase);
});

// Simple function to generate a unique invoice ID (you might use a library for this in production)
function generateInvoiceId() {
    return 'INV-' + Math.floor(Math.random() * 10000);
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
