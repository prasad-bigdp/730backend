import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/config'
import authRoutes from './Routes/authRoutes'
import cors from 'cors'
dotenv.config()
connectDB()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.listen(process.env.PORT, () =>
{
    console.log(`application is running at http://localhost:5173`)
})