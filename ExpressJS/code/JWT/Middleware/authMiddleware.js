import jwt from 'jsonwebtoken'
import { User } from '../Models/UserModel'
export const protectMiddleware = async (req, res, next) =>
{
    let t;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    {
        try
        {
            t = req.headers.authorization.split(" ")[1]
            const decode = jwt.verify(t, process.env.JWT_SECRET_KEY)
            req.user = await User.find({ id: decode.id })
            next()
        }
        catch (err)
        {
            res.status(401).json({ message: "Invalid or expired token" })
        }
    }
    else
    {
        res.status(401).json({message:"No token is provided"})
    }
}