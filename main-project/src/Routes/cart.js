import express from "express"
import auth from "../middleware/auth.js"
import { getCart, addToCart } from "../controllers/cartController.js"

const router = express.Router()

router.get("/", auth, getCart)
router.post("/add", auth, addToCart)

export default router
