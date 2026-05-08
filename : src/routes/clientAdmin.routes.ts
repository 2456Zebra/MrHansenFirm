import { Router } from 'express';
import { clientAdminOnly } from '../middleware/auth.middleware';

const router = Router();

router.get('/clients', clientAdminOnly, (req, res) => {
  res.json({ 
    success: true, 
    data: { message: "Client list for this admin", userRole: req.user?.role } 
  });
});

router.post('/clients', clientAdminOnly, (req, res) => {
  res.status(201).json({ success: true, message: 'Client created successfully' });
});

router.put('/matters/:id', clientAdminOnly, (req, res) => {
  res.json({ success: true, message: 'Matter updated' });
});

router.get('/billing/summary', clientAdminOnly, (req, res) => {
  res.json({ success: true, data: { totalBilled: 12450, outstanding: 3200 } });
});

router.post('/documents/upload', clientAdminOnly, (req, res) => {
  res.json({ success: true, message: 'Document uploaded successfully' });
});

export default router;
