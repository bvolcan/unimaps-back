const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/', require('./routes'))

app.get('/', (req, res) => res.send('working!'))

app.listen(process.env.PORT || 3000, () => { console.log('Running!') })
