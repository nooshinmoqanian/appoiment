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

export const updateDoctor = async(phoneNumber: any, doctor: any) =>{
  try{

    return await Doctor.findOneAndUpdate({ phoneNumber }, doctor, { new: true});

  }catch(err){

        throw new Error('Failed');

  }
}

export const deleteDoctor = async(email: string) =>{

  try{

return await Doctor.findOneAndDelete({ email });

  }catch(err){

        throw new Error('Failed');

  }
}