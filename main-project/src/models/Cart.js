import mongoose from 'mongoose'
const cartItemsSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId,ref:"Product" },
    qty:{type:Number}
})
const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId,ref:"User" },
    items:[cartItemsSchema]
}, { timestamps: true })
export default mongoose.model("Cart",cartSchema)