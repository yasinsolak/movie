import axios from 'axios'

const call = axios.create({
  baseURL: 'https://api.themoviedb.org/4/',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json'
  },
  params: {
    api_key: process.env.REACT_APP_API_KEY
  }
})

export default call