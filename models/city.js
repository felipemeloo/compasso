const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
})

const City = mongoose.model('city', citySchema)

module.exports = City

