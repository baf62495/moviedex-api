require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

console.log(process.env.API_TOKEN)

const MOVIEDEX = require('./moviedex.json')

const app = express()

app.use(morgan('dev'))

app.get('/movie', function handleGetMovies(req, res) {
    res.json(MOVIEDEX)
})

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server listening at https://localhost:${PORT}`)
})