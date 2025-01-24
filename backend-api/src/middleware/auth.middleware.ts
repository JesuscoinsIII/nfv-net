import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'your_secret_key';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }

        req.userId = decoded.id;
        next();
    });
};

export const authorize = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.userId) {
            return res.status(403).json({ message: 'No user ID found' });
        }

        // Assuming you have a way to get user roles from the database
        const userRoles = getUserRoles(req.userId); // Implement this function

        const hasRole = roles.some(role => userRoles.includes(role));
        if (!hasRole) {
            return res.status(403).json({ message: 'User does not have the required role' });
        }

        next();
    };
};