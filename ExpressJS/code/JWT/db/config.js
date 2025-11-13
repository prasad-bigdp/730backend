import mongoose from 'mongoose'
export const connectDB = async () =>
{
    try
    {
        const conn = await mongoose.Connection(process.env.Mongo_URI)
        console.log("MongoDB is connected successfully")
    }
    catch (err)
    {
        console.log("Connection failed to mongodb", err)
        process.exit(1)
    }
}