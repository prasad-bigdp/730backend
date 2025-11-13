import express from 'express'
import { loginUser, registerUser,getProducts } from '../Controllers/authController'
import { protectMiddleware } from '../Middleware/authMiddleware'
const router = express.router()
router.get('/register', registerUser)
router.get('./products', protectMiddleware, getProducts)
router.get('./login',loginUser)