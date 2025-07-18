import express, { Router } from 'express'
const router = Router();
import {createUser, loginUser, refreshAccessToken, logoutUser} from '../controllers/auth.controllers.js';
import verifyToken from '../middlewares/verifyToken.js';


router.post('/create-user',createUser);

router.post('/login',loginUser);

router.post('/refresh-token',refreshAccessToken);

router.post('/logout',logoutUser);

export default router;