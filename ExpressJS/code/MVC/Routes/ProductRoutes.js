import {
	getProducts,
	addProduct,
	getProductById,
	deleteProductById,
} from "../Controllers/ProductController.js"
import express from 'express'
const productRoute = express.Router()
console.log("hi")
productRoute.route("/").get(getProducts)
productRoute.route('/').post(addProduct)
productRoute.route('/:id').get(getProductById)
productRoute.route("/:id").delete(deleteProductById)
export default productRoute