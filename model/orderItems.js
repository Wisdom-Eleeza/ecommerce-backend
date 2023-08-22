const mongoose = require('mongoose')
const { Schema } = mongoose

const OrderItemSchema = new Schema ({
    id: Schema.ObjectId,
    order_id: {
        ref: 'order'
    },
    serialNumber: String,
})
module.exports = OrderItemSchema