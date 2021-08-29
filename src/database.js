import mongoose from 'mongoose'
import config from './config'

mongoose
  .connect(config.MONGO_URL, (error, res) => { error ? console.error(error) : console.info('(!) Connection with DB setted correctly\n') })
