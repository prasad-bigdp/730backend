import express from 'express'
import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productsController'
import adminMiddleWare from '../middlewares/adminMiddleware'
import authMiddleware from "../middlewares/authMiddleware"
const router = express.Router()
router.get('/products', getAllProducts)
router.get('/products/:id', getProduct)
router.post("/products", authMiddleware, adminMiddleWare, createProduct)
router.put("/products/:id", authMiddleware, adminMiddleWare, updateProduct)
router.delete("/products/:id", authMiddleware, adminMiddleWare, deleteProduct)
export default router;