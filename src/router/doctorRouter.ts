import { Router } from 'express';
import { createDoctor } from '../controller/doctorController';


const router = Router();

router.post('/', createDoctor);

export default router;