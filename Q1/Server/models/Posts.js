
import {sequelize } from "../db/connection.js";

import { DataTypes } from "sequelize";




const Post=sequelize.define("Post",{

    title:{
    type:DataTypes.STRING(50),
    allowNull:false,

    validate:{

        notEmpty:true,
    },
 
    },
    
    
   content:{
        type:DataTypes.TEXT,
        allowNull:false,
       
        validate:{
           
       notEmpty:true,

        },
    },
    
    
    });


    export default Post;