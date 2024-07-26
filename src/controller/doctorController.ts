import { Request, Response } from 'express';
import Doctor from '../models/doctor';

export const createDoctor = async (req: Request, res: Response) => {
 
    try{
      const newDoctor = new Doctor(req.body);
      await newDoctor.save();
      res.status(201).json(newDoctor)

    }catch(err){
     
        res.status(500).json({err: 'failed'})
    }

}