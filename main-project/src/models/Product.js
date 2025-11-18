import mongoose from 'mongoose'
const ProductSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String},
    price: { type: Number },
    category: { type: String},
}, { timestamps: true })
export default mongoose.model("Product",ProductSchema)