import express from 'express';
import userController from '../controllers/userfind.js';
const router = express.Router();


router.route('/').post(userController.create);
router.route('/login').post(userController.login);

export default router;
