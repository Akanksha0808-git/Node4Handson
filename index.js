const express = require("express");
const route = require("./router/category");
const dotenv = require("dotenv");
const cors = require("cors"); // Import the cors middleware

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// Allow requests from localhost:3000 (your frontend domain)
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions)); // Use cors middleware with options

app.use("/api/category", route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
