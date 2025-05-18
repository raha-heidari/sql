import User from "../models/Users.js";
import Post from "../models/Posts.js";

User.hasMany(Post,{

        foreignKey:{
          name:"userId",
        allowNull:false, 
        },
        onDelete:"CASCADE",
    }
);


Post.belongsTo(User,{
ForeignKey:{
    name:"userId",
    allowNull:false,
}
});


