import mongoose, { Schema, Document } from 'mongoose';


interface IPatient extends Document {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
}

const PatientSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  });


const Patient = mongoose.model<IPatient>('Patient', PatientSchema);
export default Patient;