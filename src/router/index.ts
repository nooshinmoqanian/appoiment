import { Router } from 'express';
import appointmentRoutes from './appointmentRoutes';
import doctorRouter from './doctorRouter';

const router = Router();

router.use('/appointments', appointmentRoutes);

router.use('/api/doctors', doctorRouter);
export default router;