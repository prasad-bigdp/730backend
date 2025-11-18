import mongoose from "mongoose";
export const connectDB = async () =>
{
    try
    {
        const conn = await mongoose.connect(process.env.MONGODB_URI) 
        console.log("Mongodb is connected succesfully")
    }
    catch (err)
    {
        console.log("Mongodb connection failed", err);
        process.exit(1)
    }
}