const express = require('express')
const router = express.Router()
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', require('./routes'))

app.get('/', (req, res) => res.send('working!'))

app.listen(3000, () => { console.log('Running!') })
