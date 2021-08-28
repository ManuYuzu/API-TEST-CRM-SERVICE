import mongoose from 'mongoose'
import config from './config'

mongoose
  .connect(config.MONGO_URL, {
    dbName: config.MONGO_DB,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(data => console.info('(!) Connection with DB setted correctly\n'))
  .catch(error => console.error(error))
