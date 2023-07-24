import axios from 'axios'

export default axios.create({
  baseURL: 'http://api-test.bhut.com.br:3000/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})
