import { config } from 'dotenv'
config()

export default {
  PORT: process.env.PORT || 3000,
  SECRET: process.env.SECRET || 'super-secret-here-test',
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost',
  MONGO_DB: process.env.MONGO_DB || 'API-TEST-CRM-SERVICE'
}
