require("dotenv").config(); //dotenv
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const todoRouter = require("./routes/todo");

app.use(express.json()); //bodyparser
app.use(cors()); //cors
app.use(morgan("dev")); //morgan

app.use("/", todoRouter);

app.listen(3000, () => {
  console.log("port 3000");
});
