const mongoose = require('mongoose')
const { Schema } = mongoose

const orderSchema = new Schema ({
    id: Schema.ObjectId,
    orderTime: Date.now(),
    customer_id: {
        ref: 'customer'
    },
})

module.exports = orderSchema