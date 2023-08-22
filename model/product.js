const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema ({
    text: String,
})


module.exports = productSchema