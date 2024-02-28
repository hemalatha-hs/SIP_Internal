const express = require('express');
const passport = require('passport');
const connectDB = require('./config/db');
// const path = require('path');
// require(path.resolve(__dirname, 'config/db'));
// const path1 = require('path1');
// require(path1.resolve(__dirname, 'routes/auth'));
// const authRoutes = require('/routes/auth');
const authRoutes = require('./routes/auth');

// const path2 = require('path2');
// require(path2.resolve(__dirname, 'routes/food'));
const foodRoutes = require('./routes/food');
// const path3 = require('path3');
// require(path3.resolve(__dirname, 'routes/order'));
const orderRoutes = require('./routes/order');

const app = express();

// Connect Database
connectDB();

// Passport Config
require('./config/passport')(passport);


// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Passport Middleware
app.use(passport.initialize());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/order', orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
