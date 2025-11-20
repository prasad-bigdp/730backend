import express from 'express'
import authMiddleware from '../middlewares/authMiddleware'
import { createOrder } from '../controllers/orderController'
const router = express.Router()
router.post('/create-order', authMiddleware, createOrder)

export default router;