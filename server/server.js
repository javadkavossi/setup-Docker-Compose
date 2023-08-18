require("dotenv").config();
const { json } = require("body-parser");
const express = require("express")


const app = express()

const config = require("./config/key");

const mongoose = require("mongoose");

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/test", (req,res)=>{
    res.json({
        Hi:"Welcome to the MERN Library API " 
    });
})


app.listen(
    PORT,
    console.log(
        `server  running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);