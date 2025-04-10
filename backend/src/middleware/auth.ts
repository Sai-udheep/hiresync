import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { pool } from '../server';

interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    role: string;
}

interface AuthRequest extends Request {
    user?: User;
}

export const authenticateToken = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            res.status(401).json({ message: 'Authentication token required' });
            return;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret_key') as any;
        
        // Verify user exists in database
        const [users] = await pool.query('SELECT * FROM users WHERE id = ?', [decoded.userId]);
        const user = (users as any[])[0] as User;

        if (!user) {
            res.status(401).json({ message: 'User not found' });
            return;
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid or expired token' });
    }
};

export const authorizeRole = (roles: string[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction): void => {
        if (!req.user) {
            res.status(401).json({ message: 'Authentication required' });
            return;
        }

        if (!roles.includes(req.user.role)) {
            res.status(403).json({ message: 'Insufficient permissions' });
            return;
        }

        next();
    };
}; 