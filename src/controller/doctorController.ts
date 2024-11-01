import { Request, Response } from 'express';
import { createDoctor, deleteDoctor, getDoctorByPhoneNumber, updateDoctor, getAllDoctor } from '../service/doctorService';

//CRUD

export const getAllDoctorHandler = async (req: Request, res: Response) => {
 
    try{
      const resultDoctor = await getAllDoctor();
  
      if(resultDoctor){
  
            res.status(200).json(resultDoctor)
      } else {
  
        res.status(404).json({ error: "Doctor Not Found" })
  
      }
  
    }catch(err){
     
        res.status(500).json({ error: 'failed' })
    }
  }

export const createDoctorHandler = async (req: Request, res: Response) => {
 
    try{
      const newDoctor = await createDoctor(req.body);
      res.status(201).json(newDoctor)

    }catch(err){
     
        res.status(500).json({error: 'failed'})
    }
  

}

export const getDoctorHandler = async (req: Request, res: Response) => {
 
  try{
    const resultDoctor = await getDoctorByPhoneNumber(req.params.id);

    if(resultDoctor){

          res.status(200).json(resultDoctor)
    } else {

      res.status(404).json({ error: "Doctor Not Found" })

    }

  }catch(err){
   
      res.status(500).json({ error: 'failed' })
  }
}
 export const updateDoctorHandler = async (req: Request, res: Response) => {
    try {
        const updatedDoctor = await updateDoctor(req.params.id, req.body);
        if (updatedDoctor) {
            res.status(200).json(updatedDoctor);
        } else {
            res.status(404).json({ error: 'Doctor not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to update doctor' });
    }
};

export const deleteDoctorHandler = async (req: Request, res: Response) => {
  try {
      const deletedDoctor = await deleteDoctor(req.params.id);
      if (deletedDoctor) {
          res.status(200).json({ message: 'Doctor deleted successfully' });
      } else {
          res.status(404).json({ error: 'Doctor not found' });
      }
  } catch (err) {
      res.status(500).json({ error: 'Failed to delete doctor' });
  }
};
