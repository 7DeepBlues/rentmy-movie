const mongoose = require('mongoose')
const express = require('express')
const customers = require('./routes/customers')
const genres = require('./routes/genres')
const movies = require('./routes/movies')
const app = express()

mongoose.connect('mongodb://localhost/rentmymovie',{ useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'))


app.use(express.json())
app.use('/api/genres', genres)
app.use('/api/customers', customers)
app.use('/api/movies', movies)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening to port ${port}`))