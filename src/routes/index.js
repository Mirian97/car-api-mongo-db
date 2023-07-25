import express from 'express'
import cars from './carRoutes.js'
import logs from './logRoutes.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    return res
      .status(200)
      .send({ titulo: 'API Rest de carros para prova técnica da BHut' })
  })
  app.use(express.json(), cars, logs)
}

export default routes
