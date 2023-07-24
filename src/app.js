import express from 'express'
import db from './configs/connection.js'
import routes from './routes/index.js'

db.on('error', console.log.bind(console, 'Connection error'))
db.once('open', () => console.log('Successful connection to the database'))
const app = express()
app.use(express.json())
routes(app)

export default app
