const express = require('express')
const logger = require('./middleware/logger')

const app = express()
const PORT = process.env.PORT || 5000



// logger
app.use(logger)
// body parse middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routers api
app.use('/api/hotels',require('./routes/api/hotels'))


app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))