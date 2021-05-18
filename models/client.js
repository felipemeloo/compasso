const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    cityWhereLive: {
        type: String,
        required: true
    }
})

const Client = mongoose.model('client', citySchema)

module.exports = Client

