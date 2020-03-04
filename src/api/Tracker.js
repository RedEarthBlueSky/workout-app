//  axios setup

import axios from 'axios'

export default axios.create({
  // baseURL from ngrok, resets every 8 hours
  baseURL: 'http://62c8b688.ngrok.io'
})
