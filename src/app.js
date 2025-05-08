const express = require("express");
const dotenv = require("dotenv");
const { connectDb } = require("./Config/db.js");
dotenv.config();
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 4000;
app.listen(PORT, async ()=>{
    await connectDb();
    console.log(`sever is run on port ${PORT}`);
})