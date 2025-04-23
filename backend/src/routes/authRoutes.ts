import express from 'express';
import { body } from 'express-validator';
import authController from '../controllers/authController';
import protect from '../middleware/auth';
import passport from 'passport';

const router = express.Router();

// Register user
router.post(
  '/register',
  [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long')
      .matches(/\d/)
      .withMessage('Password must contain a number')
  ],
  authController.register
);

// Login user
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').exists().withMessage('Password is required')
  ],
  authController.login
);

// Verify email
router.get('/verify-email/:token', authController.verifyEmail);

// Request password reset
router.post(
  '/forgot-password',
  [body('email').isEmail().withMessage('Please provide a valid email')],
  authController.forgotPassword
);

// Reset password
router.post(
  '/reset-password/:token',
  [
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long')
      .matches(/\d/)
      .withMessage('Password must contain a number')
  ],
  authController.resetPassword
);

// Logout user
router.post('/logout', authController.logout);

// Get current user
router.get('/me', protect, authController.getCurrentUser);

// Google OAuth routes
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  (req, res) => {
    // Create JWT token for authenticated user
    const token = authController.generateToken(req.user._id.toString());
    
    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
    
    // Redirect to frontend
    res.redirect(`${process.env.CLIENT_URL || 'http://localhost:3000'}`);
  }
);

export default router; 