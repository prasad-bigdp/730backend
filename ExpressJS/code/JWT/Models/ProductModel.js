import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    id: { type: Number, required:true,unique:true },
    title: { type: String },
    category: { type: String },
    image: { type: String },
    rating: {
        rate: { type: Number },
        count:{type:Number}
    },
    cost:{type:Number} 
},{collection:"products"})

export const Product = mongoose.model('products',productSchema)