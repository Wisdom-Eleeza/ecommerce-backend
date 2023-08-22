const mongoose = require('mongoose')
const { Schema } = mongoose

const customerSchema = new Schema ({
    order: String,
})


module.exports = customerSchema