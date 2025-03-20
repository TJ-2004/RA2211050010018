import express from "express";
import cors from "cors";
import 'dotenv/config';

//basically here app config is initialized
const app = express();
const port = process.env.PORT || 3001; //Post on which backend will run

//so this is a middleware
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send("API Working");
})
//to start server
app.listen(port,()=>console.log("backend started at port: " + port));