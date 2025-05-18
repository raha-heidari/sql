import {sequelize} from "../db/connection.js";

import { DataTypes } from "sequelize";

const User=sequelize.define("User",{

name:{
type:DataTypes.STRING(),
allowNull:false,

validate:{

    notEmpty:true,
},
},


email:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
        notEmpty:true,
        isEmail:true,
    },

    }

});



    export default User;