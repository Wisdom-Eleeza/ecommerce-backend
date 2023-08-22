const mongoose = require('mongoose')
const { Schema } = mongoose

const guitarSchema = new Schema ({
    guitar: String
})


module.exports = guitarSchema