import mongoose from 'mongoose'

const logSchema = new mongoose.Schema({
  id: { type: String },
  date_hour: { type: Date, required: true, default: Date.now() },
  car_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
})
const logs = mongoose.model('logs', logSchema)

export default logs
