# CoSprout Backend Authentication System

This is the backend authentication system for the CoSprout application. It provides a secure authentication system with email verification, password reset, and Google OAuth integration.

## Features

- User registration with email verification
- Email and password login
- Google OAuth login
- Password reset functionality
- JWT token-based authentication
- Protected routes

## Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- Passport.js
- Nodemailer
- bcrypt.js

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/cosprout
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRES_IN=7d
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   CLIENT_URL=http://localhost:3000
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Google OAuth Setup

To enable Google login:

1. Go to the [Google Developer Console](https://console.developers.google.com/)
2. Create a new project
3. Configure the OAuth consent screen
4. Create OAuth 2.0 credentials
5. Add authorized JavaScript origins (e.g., http://localhost:3000)
6. Add authorized redirect URIs (e.g., http://localhost:5000/api/auth/google/callback)
7. Copy the Client ID and Client Secret to your `.env` file

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/auth/verify-email/:token` - Verify a user's email
- `POST /api/auth/forgot-password` - Request a password reset
- `POST /api/auth/reset-password/:token` - Reset a user's password
- `POST /api/auth/logout` - Logout a user
- `GET /api/auth/me` - Get the current user's information
- `GET /api/auth/google` - Initiate Google OAuth login
- `GET /api/auth/google/callback` - Handle Google OAuth callback

## Security Considerations

- Passwords are hashed using bcrypt
- JWT tokens are used for authentication
- Email verification is required for new accounts
- Authentication tokens expire after 7 days
- Password reset tokens expire after 1 hour
- CORS is configured to only allow requests from the client URL
- Cookie-based token storage with HTTP-only flag

## Development

To contribute to this project:

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License. 