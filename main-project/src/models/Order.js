import mongoose from 'mongoose'
const orderItemsSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId,ref:"Product" },
    qty:{type:Number}
})
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId,ref:"User" },
    items: [cartItemsSchema],
    amount: {type:Number},
    status:{type:String,default:"pending"}
}, { timestamps: true })
export default mongoose.model("Order",orderSchema)