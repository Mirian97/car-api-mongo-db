import logs from '../models/Log.js'
import api from '../services/api.js'

class CarController {
  static listCars = async (req, res) => {
    try {
      const response = await api.get('/cars')
      return res.status(200).json(response.data)
    } catch (error) {
      return res.status(500).json({ message: error.response.data.msg })
    }
  }
  static createCar = async (req, res) => {
    try {
      const { data } = await api.post('/cars', { ...req.body })
      const log = new logs({ car_id: data._id })
      await log.save()
      return res.status(200).json(data)
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}

export default CarController
