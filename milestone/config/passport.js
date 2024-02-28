// config/passport.js

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys'); // Your file containing API keys and secrets
const User = require('../models/user');

module.exports = function(passport) {
    passport.use(new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/callback'
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            // Check if user exists in database
            let user = await User.findOne({ googleId: profile.id });

            if (!user) {
                // If user does not exist, create a new user
                user = new User({
                    googleId: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value
                });
                await user.save();
            }

            // Pass the user to the next middleware
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    }));
};
