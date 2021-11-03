import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://finnhub.io/api/v1',
})
