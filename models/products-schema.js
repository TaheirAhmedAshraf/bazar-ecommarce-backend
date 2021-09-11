const mongoose = require('mongoose')

const product = mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    rating: {
        type: Object,
        require: true
    }
}, { strict: false })

const ProductSchema = mongoose.model("products", product)

module.exports = ProductSchema;