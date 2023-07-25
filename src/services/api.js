import axios from 'axios'

export default axios.create({
  baseURL: process.env.BHUT_API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})
