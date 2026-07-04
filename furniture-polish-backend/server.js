const express = require('express');
const app = express();

// sample post
app.post("/sample",(req,resp)=>{
    resp.send("Sample Post API is Working")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})