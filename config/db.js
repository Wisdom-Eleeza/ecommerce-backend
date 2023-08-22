const mongoose = require('mongoose')
const { Schema } = mongoose



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedToplogy: true,
        })
        console.log("Connected")
    } catch (error) {
        console.log("Failed")
    }
}

module.exports = connectDB
