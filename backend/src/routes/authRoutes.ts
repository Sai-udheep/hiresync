import express, { Request, Response } from 'express';
import { register, login, resetPassword } from '../controllers/authController';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/register', (req: Request, res: Response) => register(req, res));
router.post('/login', (req: Request, res: Response) => login(req, res));

// Protected routes
router.post('/reset-password', authenticateToken, (req: Request, res: Response) => resetPassword(req, res));

export default router; 