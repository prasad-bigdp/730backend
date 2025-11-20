import asyncHandler from "express-async-handler"
import Product from '../models/Product'
export const getAllProducts = asyncHandler(async (req, res) => {
	res.status(200).json(await Product.find())
})
export const getProduct = asyncHandler(async (req, res) => {
	res.status(200).json(await Product.findById(req.params.id))
})
export const createProduct = asyncHandler(async (req, res) => {
	res.status(200).json(await Product.create(req.body))
})
export const UpdateProduct = asyncHandler(async (req, res) => {
	res.status(200).json(await Product.findByIdAndUpdate(req.params.id, req.body))
})
export const DeleteProduct = asyncHandler(async (req, res) => {
	const p = await Product.findByIdAndDelete(req.params.id)
	res.status(200).json({ message: "deleted successfully" })
})