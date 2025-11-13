import mongoose from "mongoose";
export const connectDB = async () =>
{
    try
    {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongodb is connected succesully")
    }  
    catch (err)
    {
        console.log("mongodb is not connected", err);
        process.exit(1)
    }
}