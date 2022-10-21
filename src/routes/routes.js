import express from 'express';
import userController from '../controllers/userfind.js';
import protect from '../middleware/auth.js';
const router = express.Router();


router.route('/').post(userController.create);
router.route('/login').post(userController.login);
router.route('/:id').put(protect, userController.update);

export default router;
