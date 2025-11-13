import express from "express"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import cors from 'cors'
import productRoute from "./Routes/ProductRoutes.js"
dotenv.config() // middleware to connect .env files
connectDB()
const app = express();
app.use(cors())
app.use(express.json()) // middleaware for parsing
app.use("/api/products", productRoute)
app.listen(process.env.PORT, () => {
	console.log(`application is running at http://localhost:${process.env.PORT}`)
})
