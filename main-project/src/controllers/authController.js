import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import asyncHandler from 'express-async-handler'
export const signup = asyncHandler(async (req, res) =>
{
    const { name, email, password, role } = req.body
    const exists = await User.findOne({ email: email })
    if (exists)
    {
        res.status(200).json({message:"user email already registered"})
    }
    const hashedPwd = await bcrypt.hash(password, 16);
    const user = await User.create({ name, email, password: hashedPwd, role })
    res.status(200).json({user,message:"user registered sucessfully"})
})
export const login = asyncHandler(async (req, res) =>
{
    const { email, password } = req.body;
    const user = await findOne({ email: email });
    if (!user)
    {
        res.status(400).json({message:"User is not registered"})
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match)
    {
         res.status(400).json({ message: "Invalid credentials." })
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET)
    res.json({ token, user })
})