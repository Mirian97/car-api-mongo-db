import express from 'express'
import LogController from '../controllers/LogController.js'

const router = express.Router()
router.get('/logs', LogController.listLogs)

export default router
