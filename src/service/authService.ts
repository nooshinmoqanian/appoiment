import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

import Doctor from "../models/doctor"

dotenv.config();

export const register =  async (name: string, email: string, phoneNumber: string, password: string) => {

    let user = await Doctor.findOne({ email });

    if(user){
        throw new Error('User Already Exists')
    }

    const salt = await bcrypt.genSalt(10);
    
    user = new Doctor({ name, email, phoneNumber })

    user.password = await bcrypt.hash(password, salt)

    const payload = { user: { id: user.id }}

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '1h' })

    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1);

    user.token = token;
    user.tokenExpiresAt = expiresAt;

    await user.save();
    
    return { token };
}

export const login = await (email: string , password: string) => {

    const user = await Doctor.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    const insMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    
}