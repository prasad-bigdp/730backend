import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role:{type:String,enum:['user','admin']}
})
userSchema.pre('save', async (next) =>
{
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 16);
    next();
})
//compare password method
userSchema.methods.matchPassword = async (pwd) =>
{
    return await bcrypt.compare(pwd,this.password)
}

export const User =  mongoose.model("users",userSchema)