const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', require('./routes'))

app.get('/', (req, res) => res.send('working!'))

app.listen(process.env.PORT || 3000, () => { console.log('Running!') })
