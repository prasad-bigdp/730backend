import express from 'express'
import { signup, login } from '../controllers/authController'
const router = express.Router()
router.post("/signup", signup)
router.post("/login", login)
export default router