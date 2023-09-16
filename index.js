const express = require("express");
const route = require("./router/category");
const dotenv = require("dotenv");
const cors = require("cors"); // Import the cors middleware

dotenv.config();

const app = express();
const port = process.env.port;

app.use(express.json());
app.use(cors({
  origin:'*'
})); 
app.get("/", (req, res) => {
  //   res.send("This is the Home Page. Please Route to /api/main for more details");
  res.send(
    "<html><body><h1>This is the Home Page. Please Route for more details about ExpressJS.</h1></body></html>"
  );
});
app.use("/api/category", route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
