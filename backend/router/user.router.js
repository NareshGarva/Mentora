import express from 'express'
import { Router } from 'express'
const router = Router();
import verifyToken from '../middlewares/verifyToken.js';
import verifyUser from '../middlewares/verifyUser.js'
import { getUser, getMentors } from '../controllers/user.controllers.js';


  // All routes below require authentication
router.use(verifyToken);

router.get('/get-user', getUser);

router.get('/get-mentors', getMentors);

router.get('/verify-identity/:username/:role',verifyUser,{

});

export default router