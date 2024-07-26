import { Schema, model } from 'mongoose';

const doctorSchema = new Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true }
});

const Doctor = model('Doctor', doctorSchema);

export default Doctor;
