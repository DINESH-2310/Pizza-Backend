const express=require("express");
const app=express();
const db=require("./db")
const pizza=require("./Models/PizzaModels")
app.use(express.json());

app.get("/getpizzas",(req,res)=>
{
    pizza.find({}, (err , docs)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(docs)
        }
    })
});

const port = process.env.PORT ||5000;
app.listen(port,()=> "server working");
