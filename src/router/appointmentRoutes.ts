import { Router } from 'express';
import { getAppointment } from '../controller/appointmentController';

const router = Router();

router.get('/', getAppointment);

export default router;