const mongoose = require('mongoose')
const { Schema } = mongoose

const customerSchema = new Schema ({
    id: Schema.ObjectId,
    name: String,
})


module.exports = customerSchema