import amqp from 'amqplib'
import { registerWebHook } from '../services/webHook.js'
const amqpUrl = process.env.AMQP_BASE_URL
const queue = process.env.QUEUE_NAME

export const connectToQueue = async () => {
  try {
    const connection = await amqp.connect(amqpUrl)
    const channel = await connection.createChannel()
    await channel.assertQueue(queue, { durable: true })
    return {
      channel,
      connection
    }
  } catch (error) {
    throw new Error('Erro ao conectar ao RabbitMQ: ' + error.message)
  }
}

export const sendToQueue = async (message) => {
  try {
    const { channel } = await connectToQueue()
    return channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
      persistent: true
    })
  } catch (error) {
    throw new Error('Erro ao conectar ao RabbitMQ: ' + error.message)
  }
}

export const startConsumer = async () => {
  try {
    const { channel, connection } = await connectToQueue()
    channel.consume(queue, (message) => {
      const messageContent = message.content.toString()
      if (messageContent) {
        const hooks = registerWebHook()
        hooks.trigger('callback_hook', {
          msg: 'Novo carro foi cadastrado',
          data: messageContent
        })
      }
      channel.ack(message)
    })
    setTimeout(() => connection.close(), 500)
  } catch (error) {
    throw new Error('Erro ao conectar ao RabbitMQ: ' + error.message)
  }
}

startConsumer()
