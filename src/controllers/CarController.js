import logs from '../models/Log.js'
import { sendToQueue } from '../queue/index.js'
import api from '../services/api.js'

class CarController {
  static listCars = async (req, res) => {
    try {
      const response = await api.get('/cars')
      return res.status(200).json(response.data)
    } catch (error) {
      return res
        .status(error.response.status)
        .json({ message: error.response.data.msg })
    }
  }
  static createCar = async (req, res) => {
    try {
      const { data } = await api.post('/cars', { ...req.body })
      const log = new logs({ car_id: data._id })
      await log.save()
      await sendToQueue(data)
      return res.status(200).json(data)
    } catch (error) {
      return res
        .status(error.response.status)
        .json({ message: error.response.data.msg })
    }
  }
  static receiveWebHook = (req, res) => {
    console.log('WebHook recebido com sucesso', req.body)
    return res.status(200).end()
  }
}

export default CarController
