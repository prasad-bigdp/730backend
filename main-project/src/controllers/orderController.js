import asyncHandler from "express-async-handler"
import Cart from "../models/Cart.js"
import Order from "../models/Order.js"

export const createOrderFromCart = asyncHandler(async (req, res) => {
	const cart = await Cart.findOne({ user: req.user.id }).populate(
		"items.product",
	)

	if (!cart || cart.items.length === 0)
		return res.status(400).json({ msg: "Cart empty" })

	let amount = 0
	const items = cart.items.map((i) => {
		amount += i.product.price * i.qty
		return { product: i.product._id, qty: i.qty }
	})

	const order = await Order.create({ user: req.user.id, items, amount })

	cart.items = []
	await cart.save()

	res.status(201).json(order)
})
