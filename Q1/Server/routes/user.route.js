
import  express from 'express';
import {createUser,getAllUsers,updateUser,deleteUser}from '../controllers/user.controller.js';

const userRouter = express.Router();
userRouter.post('/', createUser);
userRouter.delete('/:id', deleteUser);
userRouter.get('/', getAllUsers);
userRouter.put('/:id', updateUser);


export default userRouter;