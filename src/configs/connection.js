import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const databaseUrl = process.env.DB_URL
mongoose.connect(databaseUrl)
const db = mongoose.connection

export default db
