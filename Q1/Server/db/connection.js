
import {Sequelize } from "sequelize";

import "dotenv/config";



const {MYSQL_PORT,
    MYSQL_HOST,
    MYSQL_USERNAME,
    MYSQL_PASSWORD,
    MYSQL_DATABASE}=process.env;



    export const sequelize=new Sequelize({
        dialect:"mysql",
        port:MYSQL_PORT,
        host:MYSQL_HOST,
        username:MYSQL_USERNAME,
        password:MYSQL_PASSWORD,
        database:MYSQL_DATABASE,
        logging:false,
    });

    // sequelize
    // .authenticate()
    // .then(()=>console.log("Database connected."))
    // .catch((err)=>console.log("Database Error:",err));

