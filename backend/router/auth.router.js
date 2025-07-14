import express, { Router } from 'express'
const router = Router();
import {createUser} from '../controllers/authControllers.js';


router.post('/create-user',createUser);

export default router;