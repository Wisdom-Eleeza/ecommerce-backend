const express = require('express')
const guitar = require('./router/guitar')

app.use(express.json())


app.use('/api/user', guitar)