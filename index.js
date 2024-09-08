const express = require("express");
const app = express();

// Use the port from the environment variable, or default to 8000 for local testing
const port = process.env.PORT || 8000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Endpoint to respond with "hello world" in JSON format when accessing the root ("/")
app.get("/", (req, res) => {
  console.log("hello world");
  res.json({ message: "hello world" });
});

// Start the server and listen on the provided port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
