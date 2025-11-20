export default function (req, res, next)
{
    if (req.user.role != "admin")
    {
        res.status(405).json({message:"only admin can access this"})
    }
    next()      
}