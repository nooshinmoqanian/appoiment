import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  doctor: mongoose.Types.ObjectId; 
  patient: mongoose.Types.ObjectId; 
  date: Date; 
  status: string; 
}

const AppointmentSchema: Schema = new Schema({
  doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true, enum: ['confirmed', 'pending', 'cancelled'], default: 'pending' },
});

const Appointment = mongoose.model<IAppointment>('Appointment', AppointmentSchema);
export default Appointment;
