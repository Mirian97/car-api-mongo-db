import express from 'express'
import CarController from '../controllers/CarController.js'

const router = express.Router()

router
  .get('/listCars', CarController.listCars)
  .post('/createCar', CarController.createCar)
  .post('/webHookClient', CarController.receiveWebHook)

export default router
