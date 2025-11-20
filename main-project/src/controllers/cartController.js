import asyncHandler from "express-async-handler"
import Cart from "../models/Cart.js"
import Product from "../models/Product.js"

export const getCart = asyncHandler(async (req, res) => {
	const cart = await Cart.findOne({ user: req.user.id }).populate(
		"items.product",
	)
	res.json(cart || { items: [] })
})

export const addToCart = asyncHandler(async (req, res) => {
	const { productId, qty = 1 } = req.body

	const product = await Product.findById(productId)
	if (!product) return res.status(404).json({ msg: "Product not found" })

	let cart = await Cart.findOne({ user: req.user.id })

	if (!cart) {
		cart = await Cart.create({
			user: req.user.id,
			items: [{ product: productId, qty }],
		})
	} else {
		const item = cart.items.find((i) => i.product.equals(productId))
		if (item) item.qty += qty
		else cart.items.push({ product: productId, qty })

		await cart.save()
	}

	await cart.populate("items.product")
	res.json(cart)
})
