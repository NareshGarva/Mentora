import express, { Router } from 'express'
const router = Router();
import {createUser, loginUser} from '../controllers/auth.controllers.js';


router.post('/create-user',createUser);

router.post('/login',loginUser);

export default router;