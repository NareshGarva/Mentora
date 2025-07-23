import express from 'express'
import { Router } from 'express'
const router = Router();
import verifyToken from '../middlewares/verifyToken.js';
import {updateSocialLink,
  updateEducation,
  updateRate,
  updateExpertise,
  updateWorkExperience,
  updateAvailability,
  updateUserProfile } from '../controllers/mentor.controllers.js';


  // All routes below require authentication
router.use(verifyToken);

// Update profile info (bio, avatar, dob, gender, etc.)
router.put("/update-profile", updateUserProfile);

// Add social links (multiple)
router.post("/social-links", updateSocialLink);

// Add education records (multiple)
router.post("/education", updateEducation);

// Add rate (single or latest)
router.post("/rate", updateRate);

// Add expertise (multiple)
router.post("/expertise", updateExpertise);

// Add work experience (multiple)
router.post("/work-experience", updateWorkExperience);

// Add availability (entire week as 1 document)
router.post("/availability", updateAvailability);


export default router