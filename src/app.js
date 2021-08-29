import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

// Routes Imports
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import customerRoutes from './routes/customer.routes'

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
  .use('/api/auth', authRoutes)
  .use('/api/users', userRoutes)
  .use('/api/customers', customerRoutes)

export default app
