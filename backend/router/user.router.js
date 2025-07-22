import express from 'express'
import { Router } from 'express'
const router = Router();
import verifyToken from '../middlewares/verifyToken.js';
import verifyUser from '../middlewares/verifyUser.js'
import { getUser, getMentors } from '../controllers/user.controllers.js';

router.get('/get-user/:role/:username',verifyToken,verifyUser, getUser);

router.get('get-mentors', getMentors)

export default router