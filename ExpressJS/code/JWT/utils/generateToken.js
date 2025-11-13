import jwt from 'jsonwebtoken'
export const generateToken = async (userid) =>
{
    return jwt.sign({ id: userid }, process.env.JWT_SECRET_KEY,{expiresIn:'7d'})
}