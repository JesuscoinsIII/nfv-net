import { Router } from 'express';
import volunteersRoutes from './volunteers.routes';

const router = Router();

// Integrate volunteers routes
router.use('/volunteers', volunteersRoutes);

export default router;