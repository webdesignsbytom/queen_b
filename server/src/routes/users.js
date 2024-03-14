import { Router } from 'express';
import {
  getUserById,
  getUserByEmail,
  deleteUser,
} from '../controllers/users.js';
import {
  validateAuthentication,
  validateAdminRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/user/userId/:userId', getUserById);
router.get('/user/email/:email', getUserByEmail);
router.delete('/delete/:userId', deleteUser);

export default router;
