
import express from'express';
import{createPost,getPostsByUser,updatePost,deletePost}from '../controllers/post.controller.js';

const postRouter= express.Router();


postRouter.put('/posts/:id', updatePost);

postRouter.post('/users/:userId/posts', createPost);

postRouter.get('/users/:userId/posts', getPostsByUser);

postRouter.delete('/posts/:id', deletePost);




export default postRouter;