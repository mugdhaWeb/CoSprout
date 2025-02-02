import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON bodies
app.use(express.json());

// A simple route for testing
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to CoSprout Backend!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
