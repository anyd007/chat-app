const express = require("express")
const path = require("path")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()


const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, "../client/build")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

const herokuPort = process.env.PORT || 3002
app.listen(herokuPort, ()=>{
    console.log(`działam na porcie ${herokuPort}`);
})