//Load HTTP module
import express from "express";
import bodyParser from "body-parser";

const app =express();
const port =9000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var temp;
app.post("/",(req,res)=>{
        temp=req.body.message;
        if(temp=="support"){
            res.json({
                "reply":"no"
        })}
        else{
            res.json({
                "reply":"ok "
        })
    }
 })
app.listen(port,()=>{
    console.log(`start`);
})