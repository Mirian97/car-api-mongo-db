import express from 'express'

const routes = (app) => {
  app.route('/').get((req, res) => {
    return res
      .status(200)
      .send({ titulo: 'API Rest de carros para prova técnica da BHut' })
  })
  app.use(express.json())
}

export default routes
