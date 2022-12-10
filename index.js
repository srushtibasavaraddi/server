//Load HTTP module
import express from "express";
import bodyParser from "body-parser";

const app =express();
const port =9000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var temp;
var response;
app.post("/",(req,res)=>{
        temp=req.body.message;
        response={
            "reply":"nettaga enter maad pa"
        }
        if(temp=="support"){
            response={
                "reply":"nahi rukh ja"
            }
           }
    
    res.end();
 })
app.listen(port,()=>{
    console.log(`start`);
})