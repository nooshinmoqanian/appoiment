import mongoose, { Schema, Document } from 'mongoose';


  interface IDoctor extends Document {
    name: string;
    email: string;
    password: string;
    specialty: string;
    licenseNumber: string;
  }

const DoctorSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  specialty: { type: String, required: true },
  licenseNumber: { type: String, required: true, unique: true }
});

const Doctor = mongoose.model<IDoctor>('Doctor', DoctorSchema);
export default Doctor;

