import axios from 'axios'

const { NEXT_PUBLIC_API_BASE_URL } = process.env

export const API = axios.create({
  baseURL: NEXT_PUBLIC_API_BASE_URL,
})
