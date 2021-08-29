import mongoose from 'mongoose'
import config from './config'

mongoose
  .connect(config.MONGO_URL, (error, res) => {
    error
      ? console.error(error)
      : console.info('(!) DB Connection: \x1b[32mOK\x1b[0m\n')
  })
