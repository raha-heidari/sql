import express from "express";
import{sequelize} from "./db/connection.js";
import"dotenv/config";
import cors from "cors";



const app=express();
app.use(express.json());
app.use(cors());
import User from './models/Users.js';
import Post from './models/Posts.js';


import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

import './db/association.js';

app.use('/users', userRouter);
app.use('/', postRouter);

const port =process.env.SERVER_PORT || 3002;


sequelize
.sync({alter:true})
.then(()=>console.log("Synced."))
.catch((err)=>(console.log("Didn't syn",err)));


app.listen(port,()=>{

console.log("Server is logging on port:",port);

})
