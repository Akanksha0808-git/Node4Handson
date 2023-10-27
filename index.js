const express = require("express");
const route = require("./router/category");
const cors = require("cors");
const app = express();

app.use(express.json()); //Body Parser
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
 res.send({msg:"server connected already"});
});

app.use("/api",route);

app.listen(5000, () => {
  console.log(`Server is running on port :5000`);
});

