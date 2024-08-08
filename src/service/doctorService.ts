import Doctor from "../models/doctor";

export const createDoctor = async (doctor: any) => {
    try{

      const newDoctor = new Doctor(doctor);
      await newDoctor.save();
      return newDoctor;
      
    }catch(err){
        
        throw new Error('Failed to create doctor');
    }
  }
export const getDoctorByPhoneNumber = async(phoneNumber: string) => {

  try{

    return await Doctor.findOne({ phoneNumber }, { name: 1 , email: 1 });

  }catch(err){

        throw new Error('Failed');

  }
}
