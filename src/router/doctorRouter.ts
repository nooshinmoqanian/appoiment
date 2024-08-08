import { Router } from 'express';
import { createDoctorHandler, getDoctorHandler } from '../controller/doctorController';


const router = Router();

router.post('/create', createDoctorHandler);
router.get('/getByPhoneNumber/:id', getDoctorHandler);

export default router;