import { Router } from 'express';
import { firmAdminOnly } from '../middleware/auth.middleware';

const router = Router();

router.get('/users', firmAdminOnly, (req, res) => {
  res.json({ success: true, data: { message: "All firm users", total: 89 } });
});

router.put('/settings', firmAdminOnly, (req, res) => {
  res.json({ success: true, message: 'Firm settings updated successfully' });
});

router.get('/reports/revenue', firmAdminOnly, (req, res) => {
  res.json({ 
    success: true, 
    data: { monthlyRevenue: 245000, growth: 12.5, yearToDate: 1280000 } 
  });
});

router.get('/audit-logs', firmAdminOnly, (req, res) => {
  res.json({ success: true, data: [] });
});

router.delete('/users/:id', firmAdminOnly, (req, res) => {
  res.json({ success: true, message: 'User deleted successfully' });
});

router.get('/billing/firm-overview', firmAdminOnly, (req, res) => {
  res.json({ success: true, data: { totalOutstanding: 89000, collectedThisMonth: 156000 } });
});

export default router;
