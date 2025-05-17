import express from 'express';
import { clerkWebHooks } from '../controllers/userController.js';
import e from 'express';

const userRouter = express.Router();


userRouter.post('/webhooks', clerkWebHooks);


export default userRouter;
