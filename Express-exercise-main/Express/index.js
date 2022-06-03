const express = require('express');
const fs = require("fs");

const app = express()

const PORT = 5000;

app.get("/",(req, res) => {
    fs.readFile("./array.json","utf-8",(err,data)=>{
        if(!err){
            res.send(data)
        }
    })
})

app.get('/about',(req,res)=>{
    res.send("This is my about page");
})

app.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server is running on the port ${PORT}`);
    }else {
        console.log("Error Happened");
    }
})