import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

// Routes Imports
import userRoutes from './routes/user.routes'

// Create APP
const app = express()

// Settings

app.set('port', process.env.PORT || 3000)

// Middlewares
app
  .use(cors())
  .use(helmet())
  .use(morgan('dev'))
  .use(express.json())

// Routes
app
  .use('/api/users', userRoutes)

export default app
