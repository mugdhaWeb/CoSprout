import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

// Configure Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID || '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  callbackURL: `${process.env.CLIENT_URL || 'http://localhost:3000'}/api/auth/google/callback`,
  scope: ['profile', 'email']
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Find if user already exists
    let user = await User.findOne({ googleId: profile.id });
    
    if (user) {
      return done(null, user);
    }
    
    // Check if user exists with same email
    const existingUser = await User.findOne({ email: profile.emails?.[0]?.value });
    
    if (existingUser) {
      // Update existing user with Google ID
      existingUser.googleId = profile.id;
      existingUser.isVerified = true; // Google accounts are pre-verified
      await existingUser.save();
      return done(null, existingUser);
    }
    
    // Create new user
    const newUser = await User.create({
      name: profile.displayName,
      email: profile.emails?.[0]?.value,
      googleId: profile.id,
      isVerified: true, // Google accounts are pre-verified
    });
    
    return done(null, newUser);
  } catch (error) {
    return done(error as Error);
  }
}));

// Serialize user to session
passport.serializeUser((user: any, done) => {
  done(null, user._id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport; 