const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    console.log("Hi~")
    res.end();
})

app.listen(3001,"0.0.0.0")
//http://0.0.0.0:3001