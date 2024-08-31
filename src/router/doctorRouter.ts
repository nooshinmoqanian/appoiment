import { Router } from 'express';
import { createDoctorHandler, getDoctorHandler, updateDoctorHandler, deleteDoctorHandler } from '../controller/doctorController';


const router = Router();

router.post('/create', createDoctorHandler);
router.get('/getByPhoneNumber/:id', getDoctorHandler);
router.patch('/updateById/:id', updateDoctorHandler);
router.delete('/deleteByEmail/:id', deleteDoctorHandler);

export default router;