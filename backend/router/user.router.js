import express from 'express'
import { Router } from 'express'
const router = Router();
import verifyToken from '../middlewares/verifyToken.js';
import { getUser } from '../controllers/user.controllers.js';

router.get('/get-user',verifyToken, getUser);

export default router