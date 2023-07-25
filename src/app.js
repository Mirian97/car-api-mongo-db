import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import db from './configs/connection.js'
import routes from './routes/index.js'

db.on('error', console.log.bind(console, 'Connection error'))
db.once('open', () => console.log('Successful connection to the database'))
const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
routes(app)

export default app
