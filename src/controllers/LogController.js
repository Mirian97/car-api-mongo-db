import logs from '../models/Log.js'

class LogController {
  static listLogs = async (req, res) => {
    try {
      const response = await logs.find()
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ message: 'Erro interno do servidor' })
    }
  }
}

export default LogController
