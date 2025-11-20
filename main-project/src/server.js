import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db.js'
import rateLimit from 'express-rate-limit'
import authRoutes from './Routes/auth.js'
import productRoutes from "./Routes/products.js"
import cartRoutes from "./Routes/cart.js"
import orderRoutes from "./Routes/orders.js"

const app = express();
dotenv.config()
const PORT = process.env.PORT || 5174
connectDB(process.env.MONGODB_URI)
app.use(cors())
app.use(express.json())
app.use(rateLimit({windowMs: 15 * 60 * 1000,
    limit: 100,
}))
app.use('/api/auth', authRoutes)
app.use("/api/p", productRoutes)
app.use("/api/o", orderRoutes)
app.use("/api/c", cartRoutes)
app.get('/', (req, res) =>
{
    res.json("connected succesfuly, api running")
})
app.listen(PORT,()=>console.log(`api is running in http://localhost:${PORT}`))