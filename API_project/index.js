const express = require('express')
const logger = require('./middleware/logger')
const cors =require('cors')

const app = express()
const PORT = process.env.PORT || 5000


// cors
app.use(cors({
    origin: 'http://localhost:3000', // allow requests from Next.js app
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // specify allowed methods
    credentials: true, // allow credentials (cookies, authorization headers, etc.)
  }));
// logger
app.use(logger)
// body parse middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routers api
app.use('/api/hotels',require('./routes/api/hotels'))
app.use('/api/transaction',require('./routes/api/transaction'))


app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))