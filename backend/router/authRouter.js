import express, { Router } from 'express'
const router = Router();
import {createUser} from '../controllers/authControllers'


router.post('/create-user',createUser);

module.exports = router;