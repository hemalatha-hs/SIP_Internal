const express = require('express');
const router = express.Router();
const passport = require('passport');

// Google Auth Route
router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
);

// Facebook Auth Route (similar to Google)

module.exports = router;
