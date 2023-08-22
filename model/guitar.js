const mongoose = require('mongoose')
const { Schema } = mongoose

const guitarSchema = new Schema ({
    guitar: {
        serialNumber: Number,
        model: String,
        builder: String,
        price: Number
    }
})


module.exports = guitarSchema