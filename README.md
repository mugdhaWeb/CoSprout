# CoSprout - Educational Resource Platform

CoSprout is a comprehensive educational resource platform built with Next.js for the frontend and Python (FastAPI) for the backend. This guide will help you set up and run the project locally.

## Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.8 or higher
- Node.js 18 or higher
- npm (comes with Node.js)
- Git

## Step-by-Step Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/CoSprout.git
cd CoSprout
```

### 2. Backend Setup

#### Create and Activate Virtual Environment

For Windows:
```bash
python -m venv venv
.\venv\Scripts\activate
```

For macOS/Linux:
```bash
python3 -m venv venv
source venv/bin/activate
```

#### Install Python Dependencies
```bash
pip install -r requirements.txt
```

### 3. Frontend Setup

Navigate to the frontend directory and install dependencies:
```bash
cd frontend
npm install
```

### 4. Environment Configuration

Create a `.env` file in the frontend directory:
```bash
# Frontend (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 5. Running the Application

#### Start the Frontend Development Server
In the frontend directory:
```bash
npm run dev -- -p 3006
```
The frontend will be available at http://localhost:3006

#### Start the Backend Server (in a separate terminal)
From the root directory (with virtual environment activated):
```bash
uvicorn backend.main:app --reload --port 8000
```
The backend API will be available at http://localhost:8000

## Project Structure

```
CoSprout/
├── frontend/                # Next.js frontend application
│   ├── src/
│   │   ├── app/            # Next.js 13+ app directory
│   │   ├── components/     # Reusable React components
│   │   └── contexts/       # React contexts (auth, etc.)
│   ├── public/             # Static files
│   └── package.json        # Frontend dependencies
├── backend/                # Python FastAPI backend
├── requirements.txt        # Python dependencies
└── README.md              # Project documentation
```

## Features

1. **Resources Page**
   - Blog-style educational content
   - Like and comment functionality
   - Social sharing options
   - Category filtering

2. **Authentication**
   - User signup/login
   - Protected routes
   - Session management

3. **Content Creation**
   - Rich text editor for creating posts
   - Support for headers, lists, and formatting
   - Category assignment

## Development Guidelines

1. **Code Style**
   - Frontend: Follow Next.js and React best practices
   - Backend: Follow PEP 8 guidelines
   - Use TypeScript for frontend development

2. **Git Workflow**
   - Create feature branches from main
   - Use meaningful commit messages
   - Submit pull requests for review

3. **Testing**
   - Write unit tests for new features
   - Test across different browsers
   - Ensure mobile responsiveness

## Troubleshooting

1. **Port Already in Use**
   - Change the port using the `-p` flag with npm run dev
   - Check for and kill existing processes using the port

2. **Dependencies Issues**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`

3. **Virtual Environment Issues**
   - Ensure you're in the correct directory
   - Verify Python version matches requirements
   - Recreate virtual environment if necessary

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your fork
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 