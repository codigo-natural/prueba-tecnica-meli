import express from 'express'
import { config } from './config/index.js'
import { connectDB } from './database/index.js'
import dnaRoutes from './routes/dna.js'

const app = express()

connectDB()

app.use(express.json())

app.use('/api', dnaRoutes)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const PORT = config.PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
