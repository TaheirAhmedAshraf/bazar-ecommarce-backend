const express = require('express')
const { ObjectId } = require('mongodb');
const { Mongoose } = require('mongoose');
const ProductSchema = require('../models/products-schema')
const router = express()


router.get('/', async (req, res) => {
    try {
        const products = await ProductSchema.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/product', async (req, res) => {
    let id = req.query.id
    console.log(id)
    try {
        const product = await ProductSchema.find({ _id: Mongoose.Types.ObjectId(id) })
        console.log(product)
        res.status(200).json(product)

    } catch (error) {
        res.status(400).json(error)

    }
})

router.post('/', async (req, res) => {
    const { _id,
        title,
        price,
        description,
        category,
        image,
        rating, } = req.body

    try {
        const newProduct = new ProductSchema(
            {
                _id: id,
                full_name: fullName,
                email: email,
            })
        newProduct.save()
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router