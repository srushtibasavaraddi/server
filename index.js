//Load HTTP module
import express from "express";
import bodyParser from "body-parser";

const app =express();
const port =9000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/",(req,res)=>{
    res.json({
        "reply":"ok"
    })
})
app.listen(port,()=>{
    console.log(`start`);
})