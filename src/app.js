const express = require("express");
const dotenv = require("dotenv");
const { connectDb } = require("./Config/db.js");
const emailRouter = require("./routes/emailRoute.js");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use("/email", emailRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is running on port ${PORT}`);
});
