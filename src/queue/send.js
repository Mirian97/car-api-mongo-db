import amqp from 'amqplib'

const amqpUrl = process.env.AMQP_BASE_URL
const queue = process.env.QUEUE_NAME

const sendToQueue = async (message) => {
  try {
    const connection = await amqp.connect(amqpUrl)
    const channel = await connection.createChannel()
    await channel.assertQueue(queue, { durable: true })
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
      persistent: true
    })
    channel.consume(queue, (message) => {
      const messageContent = message.content.toString()
      console.log(messageContent)
      channel.ack(message)
    })
    setTimeout(() => connection.close(), 500)
  } catch (error) {
    throw new Error('Erro ao conectar ao RabbitMQ: ' + error.message)
  }
}

export default sendToQueue
