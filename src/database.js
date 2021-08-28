import mongoose from 'mongoose'
import config from './config'

mongoose
  .connect(config.MONGO_URL, {
    dbName: config.MONGO_DB
  })
  .then(data => console.info('(!) Connection with DB setted correctly\n'))
  .catch(error => console.error(error))
