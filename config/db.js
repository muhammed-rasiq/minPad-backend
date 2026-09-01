const mongoose = require('mongoose')

const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.connectionString)
        console.log('mongodb connected')
    } catch (error) {
        console.log('error in mongodb connection',error)
    }
}

module.exports = dbConnect