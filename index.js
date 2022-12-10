//Load HTTP module
import express from "express";

const app =express();
const port =9000;
app.use("/",(req,res)=>{
    res.json({message:"hello"})
});

app.listen(port,()=>{
    console.log(`start`);
})