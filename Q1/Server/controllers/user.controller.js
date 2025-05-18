import User from "../models/Users.js";

export const createUser = async(req , res) =>{


  try  {
    const  user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({message:err.message});
    }



};
//_______________________________________________
 export const getAllUsers =async(req,res)=> {
      try {
       const users = await User.findAll();
         res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 //__________________________________________________
export  const   updateUser = async(req, res)=> {
  try { 
    const user = await User.findByPk(req.params.id);
    if (!user) return    res.status(404).json({message: "User not found" });
    await user.update(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//______________________________________________________
export  const deleteUser= async(req, res) =>{
  try {
    const  user =await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message:"User not found" });
    await user.destroy();
     res.json({ message:   "User deleted" });
  } catch(err) {
      res.status(500).json({ message: err.message });
  }
};