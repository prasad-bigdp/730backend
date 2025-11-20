import jwt from 'jsonwebtoken'
export default function (req, res, next)
{
    const token = req.header.Authorization?.split(' ')[1]
    if (!token)
        res.status(400).json({ message: "token is required" })
    try
    {
        req.user = jwt.verify(token, process.env.JWT_SECRET)
        next()
    }
    catch (err)
    {
         res.status(400).json({ message: "token is not valid or expired" })
    }
}