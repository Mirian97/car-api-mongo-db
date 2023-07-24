import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const databaseUrl = process.env.MONGODB_BASE_URL
mongoose.connect(databaseUrl)
const db = mongoose.connection

export default db
