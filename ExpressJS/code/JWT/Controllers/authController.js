import { User ,Product} from './Models/UserModel.js'

import { generateToken } from './utils/generateToken.js'
export const registerUser = async (req, res) =>
{
    const { name, email, password } = req.body;
    if (!name || !email || !password)
        return res.status(401).json({ message: "name or email or password is not provided" })
    const verify = await User.find({ email: email })
    if (verify)
        return res.status(401).json({message:"your email is already exists, please login"})
    const user = await User.create({ name: name, email: email, password: password })
    const token = generateToken(user._id)
    return res.status(201).json({message:"user created successfully", details:{_id:user._id,name,email,token}})
}

export const loginUser = async (req, res) =>
{
    const { email, password } = req.body
    const check = await User.find({ email: email })
    if (!check) return res.status(401).json({ message: "email not existed" })
    if (check && (await User.matchPassword(this.password)))
    {
        return res.json({
            id: check._id,
            name: check.name,
            email: check.email,
            token:generateToken(check._id)
        })
    }
}
export const getProducts = async (req, res) =>
{
    const p = await Product.find();
    return res.status(200).json(p)
}