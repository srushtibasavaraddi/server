//Load HTTP module
import express from "express";

const app =express();
const port =9000;
app.use("/",(req,res)=>{
    res.json({message:"hello"})
});

app.post("/",(req,res)=>{
    res.json({
        "reply":"ok"
    })
})
app.listen(port,()=>{
    console.log(`start`);
})