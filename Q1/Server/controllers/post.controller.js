import Post from'../models/Posts.js';
import User from '../models/Users.js';
//______________________________________________
export const createPost  =async (req,res) => {
  try {
    const user = await User.findByPk(req.params.userId);

    if(!user) return res.status(404).json({ message:"User not found" });
      
    const post = await Post.create({...req.body, userId: req.params.userId});
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message});
  }
};
// ______________________________________________
export const getPostsByUser= async (req, res) => {
  try {
    const posts = await Post.findAll({where:{userId: req.params.userId}});
    res.status(200).json(posts);
  } catch (err){
    res.status(500).json({message: err.message});
  }
};
//___________________________________________________
export  const  updatePost = async (req, res) => {
  try  {
         const    post = await Post.findByPk(req.params.id);
           if (!post) return res.status(404).json({message:"Post not found" });
         await post.update(req.body);
          res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//____________________________________________________
export const deletePost =async (req, res)=>{
  try {
    const post = await Post.findByPk(req.params.id);
     if (!post) return res.status(404).json({ message:"Post not found"});
    await post.destroy();
      
    res.status(200).json({message:"Post deleted"});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

