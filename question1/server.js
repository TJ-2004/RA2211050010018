import express from "express";
import cors from "cors";
import 'dotenv/config';
import RouteUser from "./routes/user.route.js";
import RoutePost from "./routes/post.route.js";

//basically here app config is initialized
const app = express();
const port = process.env.PORT || 3001; //Post on which backend will run

//so this is a middleware
app.use(express.json());
app.use(cors());

//endpoint for api
app.use('/users',RouteUser);
app.post('/posts',RoutePost)

app.get('/',(req,res)=>{
    res.send("API Working");
})
//to start server
app.listen(port,()=>console.log("backend started at port: " + port));