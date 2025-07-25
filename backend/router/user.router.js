import express from 'express'
import { Router } from 'express'
const router = Router();
import verifyToken from '../middlewares/verifyToken.js';
import verifyUser from '../middlewares/verifyUser.js'
import { getUser, getMentors, checkUsername } from '../controllers/user.controllers.js';



router.get('/get-user', verifyToken,getUser);

router.get('/check-username', verifyToken,checkUsername);

router.get('/get-mentors', getMentors);

router.get('/verify-identity/:username/:role', verifyToken,verifyUser, (req, res) => {

  console.log("hmm hai", req)
  if (req.isAuthorized) {
    console.log("hmm hai", req.isAuthorized)
    return res.status(200).json({
      message: "User verified successfully",
      isAuthorized: true
    });
  }
});

export default router