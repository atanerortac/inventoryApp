import express from 'express'
import donenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import dashboardRoutes from './routes/dashboardRoutes'
import productRoutes from './routes/productRoutes'
import userRoutes from './routes/userRoutes'
import expenseRoutes from './routes/expenseRoutes'

donenv.config()

const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// ROUTES

app.use('/dashboard', dashboardRoutes)
app.use('/products', productRoutes)
app.use('/users', userRoutes)
app.use('/expenses', expenseRoutes)

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
