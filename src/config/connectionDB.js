const mongoose = require('mongoose')

const { MONGO_PASS, MONGO_USER, DB_NAME } = process.env

const mongo_uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.uq02s3f.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

exports.connect = async() => {
    try {
        await mongoose.connect(mongo_uri)
    } catch (error) {
        console.log('database connection failed')
        console.error(error)
    }
}