import asyncHandler from "express-async-handler"
import razorpay from "../utils/razorpay.js"
import Order from "../models/Order.js"

export const createRazorpayOrder = asyncHandler(async (req, res) => {
	const { orderId } = req.body
	const order = await Order.findById(orderId)

	const options = {
		amount: order.amount * 100,
		currency: "INR",
		receipt: "order_" + order._id,
	}

	const rpOrder = await razorpay.orders.create(options)

	order.razorpayOrderId = rpOrder.id
	await order.save()

	res.json(rpOrder)
})
