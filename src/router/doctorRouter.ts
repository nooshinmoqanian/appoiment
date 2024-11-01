import { Router } from 'express';
import { createDoctorHandler, getDoctorHandler, updateDoctorHandler, deleteDoctorHandler, getAllDoctorHandler } from '../controller/doctorController';


const router = Router();

router.get('/getAll', getAllDoctorHandler);

router.post('/create', createDoctorHandler);
router.get('/getByPhoneNumber/:id', getDoctorHandler);
router.patch('/updateById/:id', updateDoctorHandler);
router.delete('/deleteByEmail/:id', deleteDoctorHandler);

export default router;