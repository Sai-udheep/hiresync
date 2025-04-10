import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from '../server';

interface User {
    id: number;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    role: string;
}

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, first_name, last_name, role } = req.body;

        // Check if user already exists
        const [existingUsers] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if ((existingUsers as any[]).length > 0) {
            res.status(400).json({ message: 'Email already registered' });
            return;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user
        const [result] = await pool.query(
            'INSERT INTO users (email, password, first_name, last_name, role) VALUES (?, ?, ?, ?, ?)',
            [email, hashedPassword, first_name, last_name, role]
        );

        const userId = (result as any).insertId;

        // Generate JWT token
        const token = jwt.sign(
            { userId, role },
            process.env.JWT_SECRET || 'your_jwt_secret_key',
            { expiresIn: '24h' }
        );

        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: { id: userId, email, first_name, last_name, role }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Error registering user' });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        // Find user
        const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = (users as any[])[0] as User;

        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        // Verify password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user.id, role: user.role },
            process.env.JWT_SECRET || 'your_jwt_secret_key',
            { expiresIn: '24h' }
        );

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Error logging in' });
    }
};

export const resetPassword = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, newPassword } = req.body;

        // Find user
        const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = (users as any[])[0] as User;

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update password
        await pool.query('UPDATE users SET password = ? WHERE email = ?', [hashedPassword, email]);

        res.json({ message: 'Password reset successful' });
    } catch (error) {
        console.error('Password reset error:', error);
        res.status(500).json({ message: 'Error resetting password' });
    }
}; 