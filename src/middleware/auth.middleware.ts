import { Request, Response, NextFunction } from 'express';
import { UserRole, AuthUser } from '../types/roles';

export interface AuthRequest extends Request {
  user?: AuthUser;
}

export const hasRole = (allowedRoles: UserRole[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    const userRole = req.user?.role;

    if (!userRole || !allowedRoles.includes(userRole)) {
      res.status(403).json({ 
        success: false, 
        error: "Insufficient permissions. Access denied." 
      });
      return;
    }
    next();
  };
};

export const clientAdminOnly = hasRole([UserRole.CLIENT_ADMIN, UserRole.FIRM_ADMIN]);
export const associatesAdminOnly = hasRole([UserRole.ASSOCIATES_ADMIN, UserRole.FIRM_ADMIN]);
export const firmAdminOnly = hasRole([UserRole.FIRM_ADMIN]);
export const anyAdmin = hasRole([
  UserRole.CLIENT_ADMIN,
  UserRole.ASSOCIATES_ADMIN,
  UserRole.FIRM_ADMIN
]);
